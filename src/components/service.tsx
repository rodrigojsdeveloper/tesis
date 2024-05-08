import { Background } from './background'

interface ServiceProps {
  index: number
  description: string
}

export const Service = ({ index, description }: ServiceProps) => {
  return (
    <li className="flex min-h-24 w-full flex-col gap-3 rounded-xl bg-white-100 px-4 py-8 shadow-md">
      <div className="relative mx-auto -mt-24 flex size-32 items-center justify-center overflow-hidden rounded-full bg-blue-200">
        <span className="z-10 text-5xl font-medium text-white-100">
          {index}
        </span>
        <Background className="top-0 h-5/6 bg-gradient-to-b" />
      </div>
      <p className="text-center text-base font-normal text-black sm:text-lg">
        {description}
      </p>
    </li>
  )
}
