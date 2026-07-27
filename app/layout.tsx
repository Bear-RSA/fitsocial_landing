import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitSocial | Train. Fuel. Share. Grow.",
  description:
    "FitSocial brings training, nutrition, and community into one daily rhythm — built for South Africa.",
  icons: {
    icon: "/fitsocial-monogram.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem('fs-theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
