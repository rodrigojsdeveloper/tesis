'use client'

import { useState } from 'react'
import { Input } from './input'
import { FormProps } from '../interfaces'

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
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex min-h-[30rem] w-full max-w-lg flex-col gap-10 rounded-xl bg-white-100 px-8 py-8 sm:px-12"
    >
      <h2 className="w-full max-w-xs text-2xl font-bold text-blue-200">
        Informe seus dados para falar com um especialista:
      </h2>

      <div className="flex flex-col gap-4">
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

      <button
        type="submit"
        disabled={!isFormComplete}
        className="min-h-14 w-full rounded-xl bg-blue-200 p-2 text-lg font-bold uppercase text-white-100 duration-200 disabled:opacity-35"
      >
        fale com um especialista
      </button>
    </form>
  )
}
