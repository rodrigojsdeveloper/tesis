import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import { ConsultWidget } from './components/consult-widget'
import { Services } from './components/services'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export default function V2() {
  return (
    <main className={poppins.className}>
      <Toaster richColors position="top-center" />
      <ConsultWidget />
      <Services />
    </main>
  )
}
