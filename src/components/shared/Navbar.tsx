"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const scrollToSectionWhenReady = (
  id: string,
  behavior: ScrollBehavior = "smooth",
) => {
  let observer: MutationObserver | null = null;
  let timeoutId: number;

  const cleanup = () => {
    observer?.disconnect();
    window.clearTimeout(timeoutId);
  };

  const scrollToSection = () => {
    const element = document.getElementById(id);
    if (!element) return false;

    cleanup();
    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior,
      });
    });
    return true;
  };

  if (!scrollToSection()) {
    observer = new MutationObserver(scrollToSection);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    timeoutId = window.setTimeout(cleanup, 10000);
  }

  return cleanup;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const pathname = usePathname();
  const router = useRouter();

  const navItems: NavItem[] = [
    { href: "/", label: "Home" },
    { href: "/aktivitas", label: "Aktivitas" },
    { href: "/struktur-organisasi", label: "Struktur Organisasi" },
    {
      label: "Informasi",
      dropdown: [
        { href: "/sejarah", label: "Sejarah HIMAIF" },
        { href: "/pendaftaran", label: "Pendaftaran" },
        { href: "/galeri", label: "Galeri" },
      ],
    },
    {
      label: "Rekap",
      dropdown: [{ href: "/rekap/2026", label: "2026" }],
    },
    { href: "#KontakKami", label: "Kontak Kami" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        const sectionIds = ["tentangkami", "VisiMisi", "KontakKami"];
        const sections = sectionIds
          .map((id) => {
            const section = document.getElementById(id);
            if (section)
              return {
                id,
                offset: section.offsetTop - 200,
                height: section.offsetHeight,
              };
            return null;
          })
          .filter(
            (s): s is { id: string; offset: number; height: number } =>
              s !== null,
          );

        const currentPosition = window.scrollY;
        const active = sections.find(
          (s) =>
            currentPosition >= s.offset &&
            currentPosition < s.offset + s.height,
        );
        if (active) setActiveSection(active.id);
        else if (currentPosition < 200) setActiveSection("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsOpen(false);

    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      if (pathname !== "/") {
        router.push(`/${href}`);
      } else {
        scrollToSectionWhenReady(id);
      }
    } else if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("Home");
      }
    }
  };

  const checkIsActive = useCallback(
    (item: NavItem) => {
      if (item.dropdown) {
        return item.dropdown.some((d) => pathname === d.href);
      }
      if (!item.href) return false;
      const onHome = pathname === "/";
      if (item.href === "/") return onHome && activeSection === "Home";
      if (item.href.startsWith("#"))
        return onHome && activeSection === item.href.replace("#", "");
      return pathname === item.href;
    },
    [pathname, activeSection],
  );

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-white border-b border-slate-100">
      <div className="mx-auto px-[5%] lg:px-[10%]">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex items-center text-xl font-bold text-black cursor-pointer"
            >
              <Image
                src="/image/Logo.png"
                alt="HIMAIF Logo"
                width={32}
                height={32}
                className="w-8 h-8 mr-2 object-contain"
              />
              HIMAIF
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = checkIsActive(item);

                if (item.dropdown) {
                  return (
                    <div
                      key={item.label}
                      className="group relative px-1 py-2 text-sm font-semibold cursor-pointer"
                    >
                      <span
                        className={`flex items-center gap-1 transition-colors duration-300 ${
                          isActive
                            ? "text-black font-semibold"
                            : "text-gray-700 group-hover:text-black"
                        }`}
                      >
                        {item.label}
                        <svg
                          className="w-4 h-4 transition-transform group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                      <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left translate-y-2 group-hover:translate-y-0 overflow-hidden">
                        <div className="py-2">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              href={dropItem.href}
                              onClick={(e) => handleNavClick(e, dropItem.href)}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                pathname === dropItem.href
                                  ? "text-blue-600 bg-blue-50/50"
                                  : "text-gray-700 hover:bg-slate-50 hover:text-blue-600"
                              }`}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    onClick={(e) => handleNavClick(e, item.href || "/")}
                    className="group relative px-1 py-2 text-sm font-semibold"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-black font-semibold"
                          : "text-gray-700 group-hover:text-black"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-transform duration-300 ${
                isOpen ? "rotate-90 scale-125" : ""
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 bg-white"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item, index) => {
            const isActive = checkIsActive(item);

            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isOpen ? "translateX(0)" : "translateX(50px)",
                    opacity: isOpen ? 1 : 0,
                  }}
                  className="transition-all duration-300 ease-out space-y-2"
                >
                  <div
                    className={`py-2 text-lg font-semibold ${
                      isActive ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </div>
                  <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2">
                    {item.dropdown.map((dropItem) => {
                      const isDropActive = pathname === dropItem.href;
                      return (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          onClick={(e) => handleNavClick(e, dropItem.href)}
                          className={`block py-1.5 text-md ${
                            isDropActive
                              ? "font-semibold text-blue-600"
                              : "font-medium text-gray-500"
                          }`}
                        >
                          {dropItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.label}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(50px)",
                  opacity: isOpen ? 1 : 0,
                }}
                className="transition-all duration-300 ease-out"
              >
                <Link
                  href={item.href || "/"}
                  onClick={(e) => handleNavClick(e, item.href || "/")}
                  className={`block py-2 text-lg font-semibold ${
                    isActive ? "text-black" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
