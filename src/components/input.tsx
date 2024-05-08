import React from 'react'
import InputMask from 'react-input-mask'

interface InputProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ label, type, name, value, onChange }: InputProps) => {
  const inputField =
    type === 'tel' ? (
      <InputMask
        mask="(99) 99999-9999"
        value={value}
        onChange={onChange}
        className="h-11 w-full max-w-[17rem] rounded-xl border border-solid border-gray-300 bg-slate-50 px-4 py-2"
      >
        <input type="tel" name={name} required />
      </InputMask>
    ) : (
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-11 w-full max-w-[17rem] rounded-xl border border-solid border-gray-300 bg-slate-50 px-4 py-2"
      />
    )

  return (
    <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-center">
      <label className="text-lg font-medium text-blue-200">{label}:</label>
      {inputField}
    </div>
  )
}
