import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#1e293b] text-slate-300 border-t border-white/5 overflow-hidden">
      {/* Subtle Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto px-[5%] lg:px-[10%] pt-12 pb-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          {/* KIRI: Brand Section */}
          <div className="flex flex-col items-start max-w-sm">
            <div className="flex items-center gap-3.5 mb-6 group cursor-default">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10 transition-all duration-300">
                <Image
                  src="/images/Logo.png"
                  alt="HIMAIF Logo"
                  width="36"
                  height="36"
                  className="w-9 h-9 object-contain"
                />
              </div>

              <span className="text-xl font-black tracking-tighter text-white">
                HIMAIF
              </span>
            </div>

            <p className="text-[14px] leading-relaxed mb-8 text-slate-300/80">
              Himpunan Mahasiswa Informatika Universitas Bina Sarana
              Informatika. Wadah inspiratif untuk berinovasi dan berkolaborasi
              dalam dunia teknologi.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/himaifubsi_/?hl=id"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram HIMAIF UBSI"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/company/himpunan-mahasiswa-informatika-ubsi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn HIMAIF UBSI"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>

              <Link
                href="https://www.youtube.com/@himaifubsi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube HIMAIF UBSI"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* KANAN: Links Section */}
          <div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-16 justify-start">
            {/* Navigasi */}
            <div className="min-w-30">
              <h3 className="text-white font-bold mb-6 text-[12px] uppercase tracking-[0.2em]">
                Navigasi
              </h3>

              <ul className="space-y-3.5">
                <li>
                  <Link
                    href="/"
                    className="text-[14px] hover:text-blue-400 transition-colors font-medium text-slate-300/70"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/aktivitas"
                    className="text-[14px] hover:text-blue-400 transition-colors font-medium text-slate-300/70"
                  >
                    Aktivitas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/struktur-organisasi"
                    className="text-[14px] hover:text-blue-400 transition-colors font-medium text-slate-300/70"
                  >
                    Struktur Organisasi
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#KontakKami"
                    className="text-[14px] hover:text-blue-400 transition-colors font-medium text-slate-300/70"
                  >
                    Kontak Kami
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tentang Kami */}
            <div className="min-w-35">
              <h3 className="text-white font-bold mb-6 text-[12px] uppercase tracking-[0.2em]">
                Tentang Kami
              </h3>

              <ul className="space-y-3.5">
                <li>
                  <Link
                    href="/#tentangkami"
                    className="text-[14px] hover:text-blue-400 transition-colors font-medium text-slate-300/70"
                  >
                    Profil Organisasi
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#VisiMisi"
                    className="text-[14px] hover:text-blue-400 transition-colors font-medium text-slate-300/70"
                  >
                    Visi & Misi
                  </Link>
                </li>

                <li>
                  <Link
                    href="/sejarah"
                    className="text-[14px] hover:text-blue-400 transition-colors font-medium text-slate-300/70"
                  >
                    Sejarah HIMAIF
                  </Link>
                </li>
              </ul>
            </div>

            {/* Universitas */}
            <div className="max-w-50">
              <h3 className="text-white font-bold mb-6 text-[12px] uppercase tracking-[0.2em]">
                Universitas
              </h3>

              <a
                href="https://www.bsi.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/8 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest text-opacity-80">
                    UBSI Official
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3 text-white/20 group-hover:text-blue-400 transition-colors"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>

                <p className="text-[12px] leading-relaxed text-slate-300 group-hover:text-slate-100 transition-colors font-medium">
                  Bina Sarana Informatika
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[12px] text-slate-400 font-medium">
            © 2026
            <span className="text-white font-bold">HIMAIF UBSI</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
