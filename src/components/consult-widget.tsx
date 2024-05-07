import Image from 'next/image'
import arrowRight from '@/src/assets/arrow-right.svg'

const techServices = [
  'Gestão técnica de Programas Setoriais da Qualidade',
  'Avaliação de produtos inovadores para construção civil',
  'Realização de ensaios de materiais de construção',
]

export const ConsultWidget = () => {
  return (
    <section className="relative flex min-h-[45rem] w-full items-center justify-center bg-blue-200">
      <div className="z-10 flex w-full max-w-[75rem] flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col gap-12">
          <h1 className="w-full max-w-xl text-4xl font-bold text-white-100">
            Desenvolvimento e gestão de serviços tecnológicos!
          </h1>

          <ul className="flex flex-col gap-2.5">
            {techServices.map((tech, index) => (
              <li key={index} className="flex flex-row items-center gap-2">
                <Image
                  src={arrowRight}
                  alt="Seta para a direita"
                  width={28}
                  height={28}
                />
                <p className="text-xl font-medium text-white-100">{tech}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-5/6 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  )
}
