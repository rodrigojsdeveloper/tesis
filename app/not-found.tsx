import Link from 'next/link'
import arrowLeft from '@/assets/arrow-left.svg'
import { Arrow } from '../components/arrow'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 px-4 py-14">
      <div className="flex flex-col items-center gap-2.5">
        <h2 className="text-center text-2xl font-bold">
          Página não encontrada
        </h2>
        <p className="text-center text-base font-normal">
          A rota que você está tentando acessar não existe.
        </p>
      </div>
      <Link
        href="/"
        className="flex flex-row gap-2.5 text-center text-lg hover:underline sm:text-start sm:hover:no-underline"
      >
        <Arrow src={arrowLeft} alt="Seta para a esquerda" />
        Voltar para a página inicial
      </Link>
    </main>
  )
}
