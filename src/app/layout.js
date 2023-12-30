import { Poppins } from 'next/font/google'
import './globals.css'
const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Multiple Choice Question',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  bg-slate-500/50`}>{children}</body>
    </html>
  )
}
