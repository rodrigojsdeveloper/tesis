import Image from 'next/image'
import arrowRight from '@/src/assets/arrow-right.svg'
import { Form } from './form'
import { Background } from './background'
import { TECH_SERVICES } from '../utils/constants'

export const ConsultWidget = () => {
  return (
    <section
      id="specialist"
      className="relative flex min-h-[45rem] w-full items-center justify-center bg-blue-200 px-4 py-10"
    >
      <div className="z-10 flex w-full max-w-[90rem] flex-col items-center justify-between gap-14 xl:flex-row">
        <article className="flex flex-col gap-12">
          <h1 className="w-full max-w-xl text-2xl font-bold text-white-100 sm:text-4xl">
            Desenvolvimento e gestão de serviços tecnológicos!
          </h1>

          <ul className="flex flex-col gap-2.5">
            {TECH_SERVICES.map((tech, index) => (
              <li key={index} className="flex flex-row items-center gap-1">
                <Image
                  src={arrowRight}
                  alt="Seta para a direita"
                  width={28}
                  height={28}
                  className="hidden sm:block"
                />
                <p className="text-lg font-medium text-white-100 sm:text-xl">
                  {tech}
                </p>
              </li>
            ))}
          </ul>
        </article>

        <Form />
      </div>
      <Background className="bottom-0 h-5/6 bg-gradient-to-t" />
    </section>
  )
}
