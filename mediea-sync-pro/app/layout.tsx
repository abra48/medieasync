import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mediea Sync Pro — Kolaborasi Akademik Cerdas",
  description: "Platform micro-SaaS untuk mengaktifkan kolaborasi akademik dengan teknologi cerdas. Kelola tim, tugas, keuangan, dan dokumen dalam satu dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
