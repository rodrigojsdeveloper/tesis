import Image from 'next/image'
import Link from 'next/link'
import arrowLeft from '@/src/assets/arrow-left.svg'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 px-4 py-14">
      <div className="flex flex-col items-center gap-2.5">
        <h2 className="text-2xl font-bold">Página não encontrada</h2>
        <p className="text-base font-normal">
          A rota que você está tentando acessar não existe.
        </p>
      </div>
      <Link href="/" className="flex flex-row items-center gap-2 text-lg">
        <Image
          src={arrowLeft}
          alt="Seta para a esquerda"
          width={28}
          height={28}
        />
        Voltar para a página inicial
      </Link>
    </main>
  )
}
