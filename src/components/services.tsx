import Link from 'next/link'
import { Service } from './service'
import { OBJECTIVES } from '../utils/constants'

export const Services = () => {
  return (
    <section className="relative mb-28 mt-20 min-h-96 w-full bg-blue-100 px-4 pb-32 pt-44">
      <h2 className="absolute inset-x-0 -top-4 text-center text-3xl font-bold uppercase text-blue-200">
        serviços
      </h2>

      <ul className="mx-auto grid w-full max-w-[75rem] grid-cols-1 gap-x-10 gap-y-32 sm:grid-cols-2 lg:grid-cols-3">
        {OBJECTIVES.map((objective, index) => (
          <Service key={index} index={index + 1} description={objective} />
        ))}
      </ul>

      <Link href="#form" className="absolute inset-x-0 -bottom-8 mx-4">
        <div className="mx-auto flex min-h-16 w-full max-w-sm items-center justify-center rounded-xl bg-yellow-100 p-2">
          <p className="text-center text-xl font-bold text-blue-200">
            Fale com um especialista
          </p>
        </div>
      </Link>
    </section>
  )
}
