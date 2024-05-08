'use client'

import { useState } from 'react'
import { Input } from './input'
import { toast } from 'sonner'
import { FormProps } from '@/src/interfaces'
import arrowDown from '@/src/assets/arrow-down.svg'
import Image from 'next/image'

export const Form = () => {
  const [formData, setFormData] = useState<FormProps>({
    name: '',
    email: '',
    company: '',
    cellphone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isFormComplete =
    formData.name && formData.email && formData.company && formData.cellphone

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormData({
      name: '',
      email: '',
      company: '',
      cellphone: '',
    })
    toast.success('E-mail enviado com sucesso!')
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full min-h-[30rem] w-full flex-col gap-6 overflow-hidden rounded-xl bg-white-200 px-5 pb-8 pt-6 sm:px-8 lg:max-w-lg"
    >
      <section className="flex flex-col gap-4">
        <h2 className="text-center text-xl font-semibold text-black">
          Agendar um bate papo
        </h2>

        <figure className="mx-auto">
          <Image src={arrowDown} alt="Seta para baixo" width={30} height={30} />
        </figure>

        <div className="flex flex-col gap-8">
          <Input
            label="Nome"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="E-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Empresa"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <Input
            label="Telefone"
            type="tel"
            name="cellphone"
            value={formData.cellphone}
            onChange={handleChange}
          />
        </div>
      </section>

      <button
        type="submit"
        disabled={!isFormComplete}
        className="mx-auto min-h-12 w-fit rounded-xl bg-blue-200 px-4 py-2 text-lg font-semibold text-white-100 duration-200 disabled:opacity-35"
      >
        Enviar
      </button>
    </form>
  )
}
