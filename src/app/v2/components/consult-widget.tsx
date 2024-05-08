import { Form } from './form'
import { ADDRESSES } from '../../../utils/constants'

export const ConsultWidget = () => {
  return (
    <section
      id="specialist"
      className="relative flex min-h-[45rem] w-full items-center justify-center bg-[linear-gradient(231deg,_#3019b2_40%,_#271c47_100%)] px-4 py-10"
    >
      <div className="z-10 flex w-full max-w-[90rem] flex-col items-center justify-between gap-14 lg:flex-row">
        <article className="flex flex-col gap-12 sm:gap-20">
          <span className="w-fit rounded-md bg-blue-300 px-3 py-2 text-xs font-medium uppercase text-white-100">
            fale conosco
          </span>

          <h1 className="w-full max-w-md text-3xl font-bold text-white-100 sm:text-5xl">
            Fale com nossos especialistas
          </h1>

          <ul className="flex flex-col gap-4">
            {ADDRESSES.map((address, index) => (
              <li
                key={index}
                className="flex w-full max-w-96 flex-col gap-1.5 sm:flex-row sm:gap-2.5"
              >
                <p className="text-base font-medium leading-6 text-white-100">
                  {address.label}
                </p>
                <address className="text-base font-medium leading-6 text-white-100">
                  {address.contact}
                </address>
              </li>
            ))}
          </ul>
        </article>

        <Form />
      </div>
    </section>
  )
}
