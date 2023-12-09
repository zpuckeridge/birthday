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
  title: "Happy Birthday Mum!",
  description:
    "Birthday wishes from your sons, Zacchary, Harrison and Benjamin.",
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
