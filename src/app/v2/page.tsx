import { Toaster } from 'sonner'
import { ConsultWidget } from './components/consult-widget'
import { Services } from './components/services'

export default function V2() {
  return (
    <main>
      <Toaster richColors position="top-center" />
      <ConsultWidget />
      <Services />
    </main>
  )
}
