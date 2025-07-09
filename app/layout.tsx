import type { Metadata } from "next";
import { Protest_Guerrilla, Manrope } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const protestGuerrilla = Protest_Guerrilla({
  weight: '400',
  subsets: ["latin"],
});

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Great War: Apocalypto",
  description: "Developed by Cris Julius Malipico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://accounts.google.com/gsi/client"
          async
          defer
        ></script>
      </head>
      <body
        className={`${protestGuerrilla} ${manrope} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
