import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hirefi Consulting Solutions | Technology Recruiting",
  description:
    "Hirefi Consulting Solutions supports enterprise and public-sector organizations with specialized technology recruiting, team development, and talent market research.",
  metadataBase: new URL("https://www.hirefi.com"),
  openGraph: {
    title: "Hirefi Consulting Solutions",
    description:
      "Specialized technology talent for enterprise and public-sector organizations.",
    type: "website",
    url: "https://www.hirefi.com",
    siteName: "Hirefi Consulting Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
