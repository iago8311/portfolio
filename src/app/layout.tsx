import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const inter = Lato({ subsets: ['latin'],
  weight: ['400', '700'], })

export const metadata: Metadata = {
  title: 'Iago Rafael',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  )
}
