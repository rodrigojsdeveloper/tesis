'use client'

import { useState } from 'react'
import { Input } from './input'
import { FormProps } from '../interfaces'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '../schemas/contact'
import { InputMask } from './input/mask'

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = handleSubmit((data: FieldValues) => {
    console.log(data)
    setFormData({
      name: '',
      email: '',
      company: '',
      cellphone: '',
    })
    reset()
  })

  return (
    <form
      onSubmit={onSubmit}
      className="flex min-h-[30rem] w-full flex-col gap-10 rounded-xl bg-white-100 px-8 py-8 sm:max-w-lg sm:px-12"
    >
      <h2 className="w-full max-w-xs text-xl font-bold text-blue-200 sm:text-2xl">
        Informe seus dados para falar com um especialista:
      </h2>

      <div className="flex flex-col gap-4">
        <Input
          label="Nome"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          register={register}
          error={errors?.name?.message as string | undefined}
        />
        <Input
          label="E-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          register={register}
          error={errors?.email?.message as string | undefined}
        />
        <Input
          label="Empresa"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          register={register}
          error={errors?.company?.message as string | undefined}
        />
        <InputMask
          label="Telefone"
          type="tel"
          name="cellphone"
          value={formData.cellphone}
          onChange={handleChange}
          register={register}
          error={errors?.cellphone?.message as string | undefined}
        />
      </div>

      <button
        type="submit"
        disabled={!isFormComplete}
        className="mx-auto min-h-14 w-fit rounded-xl bg-blue-200 px-6 py-2 text-base font-bold uppercase text-white-100 duration-200 disabled:opacity-35 sm:w-full sm:text-lg"
      >
        fale com um especialista
      </button>
    </form>
  )
}
