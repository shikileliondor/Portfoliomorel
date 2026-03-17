import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "alex.dev — Backend Portfolio",
  description: "Portfolio one-page backend developer en Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
