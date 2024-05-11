import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { cn } from '../utils/cn'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tesis',
  description:
    'Engenharia e Gestão de Programas da Qualidade, Meio Ambiente e Inovação',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn('flex flex-col justify-between', inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
