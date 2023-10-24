import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar/navbar'
import { Lexend_Deca } from 'next/font/google'

const inter = Lexend_Deca({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
  variable: '--font-lexend-Deca'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>
        {children}
      </body> */}
      <body className={`${inter.variable} font-sans`}>
        <NavBar />
        {children}
      </body>
    </html>

  )
}
