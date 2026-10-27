import { cn } from "cn";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={cn("h-screen")}>
        <div
          className={cn(
            "h-full w-full flex flex-col justify-center items-center",
          )}
        >
          <Image
            src="/images/Logo.png"
            alt="Logo HIMAIF"
            width={400}
            height={0}
            className="h-auto w-auto"
          />
          <div className="pt-2 text-center flex flex-col items-center">
            <h1
              className={cn(
                "text-6xl font-black border-b border-foreground w-fit",
              )}
            >
              HIMAIF
            </h1>
            <div className={cn("pt-2")}>
              <h1 className={cn("text-4xl font-black")}>
                (Himpunan Mahasiswa Prodi Informatika)
              </h1>

              <p className={cn("text-xl font-medium tracking-widest")}>
                Universitas Bina Sarana Informatika
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
