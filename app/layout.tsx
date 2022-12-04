import './globals.css'
import {DM_Sans} from '@next/font/google'
import Navbar from './Navbar';
import Footer from './Footer';

const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dm_sans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
