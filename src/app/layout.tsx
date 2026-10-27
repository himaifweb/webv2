import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "cn";
import { ThemeProvider } from "next-themes";
import SmoothScrollProvider from "../components/shared/smoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HIMAIF UBSI",
  description:
    "HIMPUNAN MAHASISWA TEKNIK INFORMATIKA UNIVERSITAS BINA SARANA INFORMATIKA",
  icons: {
    icon: "/images/Logo.png",
    apple: "/images/Logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-geist-sans",
        "overflow-x-hidden",
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
