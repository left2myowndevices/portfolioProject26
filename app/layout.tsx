import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jess Draper | Product Designer & Frontend Engineer",
  description: "Jess Draper's portfolio: product design and frontend engineering from first idea to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
