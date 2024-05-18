import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { cn } from '../utils/cn'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Tesis',
  description:
    'Engenharia e Gestão de Programas da Qualidade, Meio Ambiente e Inovação',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          'flex flex-col justify-between antialiased',
          inter.className,
        )}
      >
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
