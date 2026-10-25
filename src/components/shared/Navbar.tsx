"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

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

export default function Navbar() {
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
    <nav
      className={cn(
        //position & layout
        "fixed top-0 z-50 w-full",
        //transition
        "transition-all duration-500",
        //color & border
        "bg-background border-b border-foreground",
      )}
    >
      <div
        className={cn(
          //layout
          "mx-auto",
          //spacing
          "px-[5%] lg:px-[10%]",
        )}
      >
        <div
          className={cn(
            //layout
            "flex items-center justify-between h-16",
          )}
        >
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className={cn(
              //flex
              "flex items-center",
              //typography
              "text-xl font-bold text-foreground cursor-pointer",
            )}
          >
            <Image
              src="/image/Logo.png"
              alt="HIMAIF Logo"
              width={32}
              height={32}
              className={cn(
                //sizing & spacing
                "w-8 h-8 mr-3",
              )}
            />
            HIMAIF
          </Link>

          {/* Desktop Navigation */}
          <div
            className={cn(
              //visibility & responsive layout
              "hidden md:h-full md:flex md:items-center",
              //spacing
              "md:gap-x-6",
            )}
          >
            {navItems.map((item) => {
              const isActive = checkIsActive(item);

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className={cn(
                      //spacing & sizing
                      "px-1 py-2 h-full",
                      //typography
                      "text-sm font-semibold",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-primary",
                      //interaction
                      "cursor-pointer",
                      //layout
                      "flex items-center gap-1",
                      //transition
                      "transition-all duration-300",
                      //dropdown positioning
                      "group relative",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        //sizing
                        "w-4 h-4",
                        //transition
                        "transition-all group-hover:rotate-180",
                      )}
                    />
                    <div
                      className={cn(
                        //position & sizing
                        "absolute left-0 top-full mt-2 w-48",
                        //color & border
                        "bg-background border border-foreground rounded-xl shadow-lg",
                        //visibility & transition
                        "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                        "transition-all duration-300 transform origin-top-left translate-y-2 group-hover:translate-y-0",
                        //overflow
                        "overflow-hidden",
                      )}
                    >
                      <div
                        className={cn(
                          //spacing
                          "py-2",
                        )}
                      >
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.label}
                            href={dropItem.href}
                            onClick={(e) => handleNavClick(e, dropItem.href)}
                            className={cn(
                              //layout & spacing
                              "block px-4 py-2.5",
                              //typography
                              "text-sm",
                              //transition
                              "transition-all duration-300",
                              //active state
                              pathname === dropItem.href
                                ? "text-foreground font-semibold"
                                : "text-muted-foreground hover:text-primary",
                            )}
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
                  className={cn(
                    //dropdown positioning
                    "group relative",
                    //spacing & sizing
                    "h-full px-1 py-2",
                    //layout
                    "flex items-center",
                    //transition
                    "transition-all duration-300",
                    //typography
                    "text-sm font-semibold",
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <div
            className={cn(
              //responsive visibility
              "md:hidden",
            )}
          >
            <button
              type="button"
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                //spacing
                "p-2",
                //transition
                "transition-all duration-300",
                //open state
                isOpen ? "rotate-90 scale-125" : "",
              )}
            >
              {isOpen ? (
                <X
                  className={cn(
                    //sizing
                    "w-6 h-6",
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    //sizing
                    "w-6 h-6",
                  )}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={cn(
          //visibility & transition
          "md:hidden transition-all duration-300 ease-in-out",
          //open state
          isOpen
            ? "max-h-screen opacity-100 bg-background"
            : "max-h-0 opacity-0 overflow-hidden",
        )}
      >
        <div
          className={cn(
            //spacing
            "px-6 py-6 space-y-4",
          )}
        >
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
                  className={cn(
                    //transition
                    "transition-all duration-300 ease-out group",
                    //spacing
                    "space-y-2",
                    //cursor
                    "cursor-default",
                  )}
                >
                  <div
                    className={cn(
                      //spacing
                      "py-2",
                      //typography
                      "text-lg font-semibold",
                      //active state
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-primary",
                    )}
                  >
                    {item.label}
                  </div>
                  <div
                    className={cn(
                      //spacing
                      "pl-4 space-y-2 ml-2",
                      //border
                      "border-l-2 border-foreground/30",
                    )}
                  >
                    {item.dropdown.map((dropItem) => {
                      const isDropActive = pathname === dropItem.href;
                      return (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          onClick={(e) => handleNavClick(e, dropItem.href)}
                          className={cn(
                            //layout & spacing
                            "block py-1.5",
                            //typography & active state
                            isDropActive
                              ? "text-md font-semibold text-foreground"
                              : "text-md font-medium text-muted-foreground hover:text-primary",
                          )}
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
                className={cn(
                  //transition
                  "transition-all duration-300 ease-out",
                )}
              >
                <Link
                  href={item.href || "/"}
                  className={cn(
                    //layout & spacing
                    "block py-2",
                    //typography
                    "text-lg font-semibold",
                    //active state
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-primary",
                  )}
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
}
