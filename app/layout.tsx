import type { Metadata } from "next";
import { Whisper } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const fontAlt = Whisper({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alt",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${fontAlt.variable}`}>
        {children}
      </body>
    </html>
  );
}
