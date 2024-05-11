import React from 'react'
import { InputProps } from '../../interfaces'
import { cn } from '../../utils/cn'
import { InputLayout } from './layout'

export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  register,
  error,
}: InputProps) => {
  return (
    <InputLayout label={label} error={error}>
      <input
        {...register(name)}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          'h-11 w-full rounded-xl border border-solid border-gray-300 bg-slate-50 px-4 py-2 sm:max-w-[17rem]',
          error ? 'border-red-100' : 'border-gray-300',
        )}
      />
    </InputLayout>
  )
}
