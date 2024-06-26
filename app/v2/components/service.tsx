import { ServiceV2Props } from '@/interfaces'

export const Service = ({ title, description, Icon }: ServiceV2Props) => {
  return (
    <li className="flex min-h-48 w-full flex-col gap-2.5 rounded-xl bg-white-100 px-4 py-8">
      <div className="mx-auto w-fit rounded-full bg-blue-100 p-3">
        <Icon size={25} color="#273db3" />
      </div>

      <h3 className="mx-auto w-fit rounded-3xl px-4 py-2 text-center text-base font-medium text-blue-200">
        {title}
      </h3>

      <p className="px-4 text-center text-base font-light text-black">
        {description}
      </p>
    </li>
  )
}
