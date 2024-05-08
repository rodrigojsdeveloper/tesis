'use client'

import { useState } from 'react'
import { Input } from './input'

export const Form = () => {
  const [formData, setFormData] = useState({
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

  return (
    <form className="flex min-h-[30rem] w-full max-w-lg flex-col gap-10 overflow-hidden rounded-xl bg-white-200">
      <h2 className="bg-gray-200 px-8 py-6 text-center text-2xl font-bold text-blue-200">
        Informe seus dados para falar com um especialista
      </h2>

      <div className="flex flex-col gap-4 px-8">
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
      <div className="px-8 pb-8">
        <button
          type="submit"
          disabled={!isFormComplete}
          className="min-h-14 w-full rounded-xl bg-blue-200 p-2 text-lg font-bold uppercase text-white-100 duration-200 disabled:opacity-35"
        >
          fale com um especialista
        </button>
      </div>
    </form>
  )
}
