import { Service } from './service'
import { OBJECTIVES_V2 } from '../../../utils/constants'

export const Services = () => {
  return (
    <section className="relative mb-28 mt-20 min-h-96 w-full bg-blue-100 px-4 pb-32 pt-44">
      <h2 className="absolute inset-x-0 -top-6 mx-auto w-fit rounded-xl bg-white-100 px-4 py-2 text-center text-4xl font-bold uppercase text-blue-200">
        serviços
      </h2>

      <ul className="mx-auto grid w-full max-w-[75rem] grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {OBJECTIVES_V2.map((objective, index) => (
          <Service
            key={index}
            title={objective.title}
            description={objective.description}
            Icon={objective.icon}
          />
        ))}
      </ul>
    </section>
  )
}
