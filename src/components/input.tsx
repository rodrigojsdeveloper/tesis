import React from 'react'
import InputMask from 'react-input-mask'
import { InputProps } from '../interfaces'

const InputMaskCorrect: React.FC<React.ComponentProps<typeof InputMask>> = (
  props,
) => {
  return <InputMask {...props} />
}

export const Input = ({ label, type, name, value, onChange }: InputProps) => {
  const inputField =
    type === 'tel' ? (
      <InputMaskCorrect
        mask="(99) 99999-9999"
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-xl border border-solid border-gray-300 bg-slate-50 px-4 py-2 sm:max-w-[17rem]"
      >
        <input type="tel" name={name} required />
      </InputMaskCorrect>
    ) : (
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-xl border border-solid border-gray-300 bg-slate-50 px-4 py-2 sm:max-w-[17rem]"
      />
    )

  return (
    <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-center">
      <label className="text-lg font-medium text-blue-200">{label}:</label>
      {inputField}
    </div>
  )
}
