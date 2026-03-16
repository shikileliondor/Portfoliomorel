import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEYAM — Portfolio",
  description: "Minimal cinematic portfolio landing page for BEYAM.",
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
