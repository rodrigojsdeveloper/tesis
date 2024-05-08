import { Service } from './service'
import { OBJECTIVES_V2 } from '../../../utils/constants'

export const Services = () => {
  return (
    <section className="mb-28 mt-20 flex min-h-96 w-full flex-col gap-24 bg-blue-100 px-4 py-32">
      <h2 className="mx-auto w-full max-w-[75rem] text-4xl font-bold text-blue-200">
        Nossos serviços
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
