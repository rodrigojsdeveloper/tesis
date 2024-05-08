import { Service } from './service'
import { OBJECTIVES_V2 } from '../../../utils/constants'

export const Services = () => {
  return (
    <section className="mb-28 mt-20 flex min-h-96 w-full flex-col gap-24 bg-blue-100 px-4 py-32">
      <div className="mx-auto flex w-full max-w-[75rem] flex-col gap-6 lg:flex-row">
        <h2 className="w-full max-w-[75rem] text-4xl font-bold text-blue-200 lg:ml-8">
          Somos especialistas em
        </h2>

        <p className="w-full max-w-[34.375rem] text-base font-normal text-black">
          Avaliações Técnicas de Produtos Inovadores, Orientam o processo de
          desenvolvimento de novos produtos (que não possuem normalização
          prescritiva)
        </p>
      </div>

      <ul className="mx-auto grid w-full max-w-[75rem] grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {OBJECTIVES_V2.map((objective, index) => (
          <Service
            key={index}
            title={objective.title}
            description={objective.description}
            Icon={objective.Icon}
          />
        ))}
      </ul>
    </section>
  )
}
