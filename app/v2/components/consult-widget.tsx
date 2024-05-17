import { Form } from './form'
import { ADDRESSES, NEXT_STEPS } from '@utils/constants'
import { Arrow } from './arrow'

export const ConsultWidget = () => {
  return (
    <section
      id="specialist"
      className="relative mx-4 mt-20 flex max-w-[82.5rem] items-center justify-center rounded-xl bg-[linear-gradient(231deg,_#273db3_40%,_#271c47_100%)] p-7 custom:mx-auto"
    >
      <div className="z-10 flex w-full flex-col items-center justify-between gap-12 lg:flex-row">
        <article className="flex w-full flex-col gap-12 sm:gap-[4.375rem] lg:w-auto">
          <span className="w-fit rounded-md bg-blue-300 px-3 py-2 text-xs font-medium uppercase text-white-100">
            fale conosco
          </span>

          <h1 className="w-full max-w-md text-3xl font-semibold leading-10 text-white-100 sm:text-[2.625rem]">
            Fale com nossos especialistas
          </h1>

          <ul className="flex flex-col gap-3">
            {ADDRESSES.map((address, index) => (
              <li
                key={index}
                className="flex w-full max-w-56 flex-col gap-1.5 sm:flex-row"
              >
                <address className="text-sm font-normal leading-8 text-white-100">
                  <strong>{address.label}</strong> {address.contact}
                </address>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold text-white-100">
              Próximos passos?
            </p>

            <ul className="flex flex-col gap-6 xl:flex-row xl:items-center">
              {NEXT_STEPS.map((step, index) => (
                <li key={index} className="flex flex-row items-center gap-6">
                  <div className="flex flex-row items-center gap-3">
                    <span className="text-2xl font-bold text-white-100">
                      {index + 1}
                    </span>
                    <p className="w-full max-w-[18.75rem] text-sm text-white-100 xl:max-w-[8.563rem]">
                      {step}
                    </p>
                  </div>

                  {index < NEXT_STEPS.length - 1 && <Arrow />}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <Form />
      </div>
    </section>
  )
}
