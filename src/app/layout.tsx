import type { Metadata } from "next";
import {Tajawal} from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "focalx blog",
  description: "this is a blog",
};

/* const tajawal = localFont({
  src: [
    {
      path: "./../assets/fonts/Tajawal-Regular.ttf",
      weight: '400',
      style: 'normal',
    },
    {
      path: "./../assets/fonts/Tajawal-Medium.ttf",
      weight: '500',
      style: 'normal',
    },
    {
      path: "./../assets/fonts/Tajawal-Bold.ttf",
      weight: '700',
      style: 'normal',
    },
    {
      path: "./../assets/fonts/Tajawal-ExtraBold.ttf",
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--tajawal-font'
}) */

const tajawal = Tajawal({
  weight: ['300' , '400' , '500', '700'],
  subsets: ['latin'],
  variable: '--tajawal-font',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={`${tajawal.variable}`}>
      <body dir="rtl" className="font-tajawal">
          {children}
      </body>
    </html>
  );
}
