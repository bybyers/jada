import { Manrope as FontSans, Inter } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})