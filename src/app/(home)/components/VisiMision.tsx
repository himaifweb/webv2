export default function VisiDanMisi() {
  const misi = [
    "Menyelenggarakan pendidik yang profesional dibidang informatika untuk mendukung ekonomi kreatif.",
    "Menyelenggarakan kegiatan penelitian dengan memanfaatkan informatika yang dapat diaplikasikan untuk kepentingan masyarakat.",
    "Menyelenggarakan kegiatan pengabdian kepada masyarakat yang kontributif dan produktif sebagai bentuk pelayanan kepada masyarakat.",
    "Menjalin kerjasama dengan stakeholder dibidang Informatika.",
  ];

  const values = [
    {
      icon: "😎",
      title: "Santai Namun Tegas",
      desc: "Membangun lingkungan kerja yang enjoy, namun tetap memegang teguh profesionalisme dan ketegasan dalam tanggung jawab.",
      num: "01",
      label: "Relaxed yet Firm",
    },
    {
      icon: "📋",
      title: "Berlandaskan Aturan Jelas",
      desc: "Setiap langkah organisasi dipandu oleh aturan main yang terstruktur rapi, menjadi pondasi kuat untuk menghindari grey area dalam bekerja.",
      num: "02",
      label: "Clear Guidelines",
    },
    {
      icon: "🤲",
      title: "Solidaritas yang Solutif",
      desc: "Kedekatan antar pengurus bukan cuma buat nongkrong, tapi jadi kunci kolaborasi efektif dan penyelesaian masalah internal yang cepat.",
      num: "03",
      label: "Bonding for Impact",
    },
  ];

  return (
    <section
      className="relative bg-slate-50 overflow-hidden py-6 md:py-14 w-full mx-auto px-[5%] sm:px-[5%] lg:px-[10%]"
      id="VisiMisi"
    >
      {/* ── Background blobs ── */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-blue-100 rounded-full blur-[120px] opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-200 rounded-full blur-[100px] opacity-30 pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10">
        {/* ══ BLOCK 1 — Visi & Misi ══ */}
        <div className="mb-14 md:mb-32">
          {/* Header */}
          <div className="mb-8 md:mb-14">
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/25 rounded-full px-4 py-1.5 text-[10.5px] font-bold text-blue-700 tracking-[0.15em] uppercase mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Visi &amp; Misi
            </span>
            <h2
              data-aos="fade-up"
              data-aos-delay="30"
              className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900"
            >
              Arah &amp;{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Tujuan</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/60 rounded-sm z-0" />
              </span>{" "}
              Kami
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="mt-4 text-slate-500 text-base max-w-lg leading-relaxed"
            >
              Fondasi gerak HIMAIF — setiap langkah berakar dari visi yang jelas
              dan misi yang terukur.
            </p>
          </div>

          {/* Visi + Misi */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">
            {/* VISI card — 2 col */}
            <div
              data-aos="fade-right"
              data-aos-delay="80"
              className="lg:col-span-2 relative rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-85"
              style={{
                background:
                  "linear-gradient(145deg, #0f172a 0%, #1e3564 55%, #0f2a5e 100%)",
              }}
            >
              {/* Glowing orb */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-blue-700/15 blur-2xl pointer-events-none" />

              {/* Decorative circle watermark */}
              <div className="absolute top-6 right-6 opacity-[0.08]">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                  <circle
                    cx="36"
                    cy="36"
                    r="34"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="36"
                    cy="36"
                    r="22"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="36"
                    cy="36"
                    r="10"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="2"
                    y1="36"
                    x2="70"
                    y2="36"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="36"
                    y1="2"
                    x2="36"
                    y2="70"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 bg-blue-400/15 border border-blue-400/25 rounded-full px-3 py-1 text-[10px] font-bold text-blue-300 tracking-[0.14em] uppercase mb-6">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  Visi
                </span>
                <p className="text-white/85 text-[15px] leading-[1.95] font-light">
                  Menjadi Program Studi unggul dibidang informatika untuk
                  mendukung ekonomi kreatif tahun 2033.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-blue-400" />
                <span className="text-blue-300/70 text-[11px] font-semibold tracking-widest uppercase">
                  HIMAIF 2025
                </span>
              </div>
            </div>

            {/* MISI card — 3 col */}
            <div
              data-aos="fade-left"
              data-aos-delay="160"
              className="lg:col-span-3 bg-white rounded-3xl p-10 border border-slate-200/80 shadow-[0_4px_32px_rgba(15,23,42,0.07)]"
            >
              <span className="inline-flex items-center gap-1.5 bg-blue-600/8 border border-blue-500/20 rounded-full px-3 py-1 text-[10px] font-bold text-blue-700 tracking-[0.14em] uppercase mb-7">
                <span className="w-1 h-1 rounded-full bg-blue-600" />
                Misi
              </span>

              <ol className="flex flex-col gap-5">
                {misi.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="shrink-0 flex flex-col items-center">
                      <span className="w-8 h-8 rounded-xl bg-linear-to-br from-blue-600 to-blue-500 flex items-center justify-center text-[11px] font-black text-white shadow-[0_4px_12px_rgba(37,99,235,0.30)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {i < misi.length - 1 && (
                        <div className="w-px mt-2 h-6 bg-linear-to-b from-blue-200 to-transparent" />
                      )}
                    </div>
                    <p className="text-[14.5px] text-slate-800 leading-[1.85]">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* ══ BLOCK 2 — Budaya Organisasi ══ */}
        <div>
          {/* Header */}
          <div className="mb-6 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span
                data-aos="fade-up"
                className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/25 rounded-full px-4 py-1.5 text-[10.5px] font-bold text-blue-700 tracking-[0.15em] uppercase mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                Budaya Organisasi
              </span>
              <h2
                data-aos="fade-up"
                data-aos-delay="50"
                className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900"
              >
                Culture{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">
                    Organisasi
                  </span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/60 rounded-sm z-0" />
                </span>{" "}
                Kami
              </h2>
            </div>
          </div>

          {/* Culture cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="group relative bg-white border border-slate-200/80 rounded-3xl p-7 shadow-[0_2px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.13)] hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-default">
                  {/* Hover accent bar top */}
                  <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-blue-600 via-blue-400 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number watermark */}
                  <span className="absolute top-5 right-6 text-[42px] font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-300 select-none leading-none">
                    {v.num}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-2xl mb-5 transition-colors duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(37,99,235,0.10)]">
                    {v.icon}
                  </div>

                  <h3 className="relative z-10 text-[15px] font-extrabold text-slate-900 mb-1 tracking-tight">
                    {v.title}
                  </h3>
                  <span className="relative z-10 text-[11px] font-semibold text-blue-500 tracking-widest uppercase mb-3 block">
                    {v.label}
                  </span>
                  <p className="relative z-10 text-justify text-[12.5px] text-slate-500 leading-[1.8]">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
