import Image from "next/image";

const TentangKami = () => {
  return (
    <section
      className="pt-10 md:pt-0 relative overflow-hidden"
      id="tentangkami"
    >
      {/* subtle bg accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 90% 20%, rgba(37,99,235,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 10% 80%, rgba(16,185,129,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="w-full mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
        {/* ══ BLOCK — Tentang + Gambar ══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-0 items-center mb-10 ">
          {/* LEFT — text */}
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="mb-4 md:pt-12"
            >
              <span className="inline-flex items-center gap-2 bg-blue-600/8 border border-blue-600/22 rounded-full px-4 py-1 text-[11px] font-bold text-blue-700 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                Tentang Kami
              </span>
            </div>

            <h2
              data-aos="fade-up"
              data-aos-delay="80"
              className="text-5xl md:text-6xl font-black tracking-tight leading-[0.95] text-slate-900 mb-5"
            >
              Mengenal
              <br />
              <span className="bg-linear-to-br from-blue-700 to-blue-500 bg-clip-text text-transparent">
                HIMAIF UBSI
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="130"
              className="text-[15px] text-slate-700 leading-[1.85] mb-5 max-w-125"
            >
              HIMAIF UBSI adalah wadah resmi bagi mahasiswa Program Studi
              Informatika untuk mengembangkan potensi diri, meningkatkan
              kemampuan akademis, dan menyalurkan aspirasi, bakat, minat, serta
              kreativitas.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-[15px] text-slate-700 leading-[1.85] mb-9 max-w-125"
            >
              Kami berkomitmen membentuk mahasiswa yang berkompeten, kreatif,
              dan berintegritas — menjadi jembatan antara mahasiswa dan civitas
              akademika UBSI, menciptakan lingkungan akademis yang dinamis dan
              berdampak.
            </p>
          </div>

          {/* RIGHT — image */}
          <div data-aos="fade-left" data-aos-delay="120" className="relative ">
            <div className=" absolute top-0 md:top-4 -right-1 md:-right-3 -bottom-1 md:-bottom-4 -left-1 md:left-4 rounded-[20px] bg-linear-to-br from-blue-100 to-blue-50 border border-blue-600/15 z-0" />
            <div
              className="relative z-10 rounded-[20px] overflow-hidden border border-slate-900/10 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src="/image/TentangKami.jpg"
                sizes="(min-width: 768px) 40vw, 90vw"
                alt="Kegiatan HIMAIF UBSI"
                width="1008"
                height="567"
                className="absolute inset-0 w-full h-full object-cover block"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/75 backdrop-blur-sm rounded-[10px] px-3.5 py-2 border border-white/12">
                <p className="m-0 text-[11px] font-semibold text-white tracking-[0.06em]">
                  HIMAIF UBSI
                </p>
                <p className="m-0 text-[10px] text-white/50 mt-px">
                  Himpunan Mahasiswa Informatika
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
