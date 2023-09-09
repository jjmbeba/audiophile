import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Footer from '../components/Footer'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Music devices e-commerce store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
