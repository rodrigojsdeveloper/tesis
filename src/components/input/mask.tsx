import React from 'react'
import ReactInputMask from 'react-input-mask'
import { InputProps } from '../../interfaces'
import { cn } from '../../utils/cn'
import { InputLayout } from './layout'

export const InputMask = ({
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
      <ReactInputMask
        {...register(name)}
        type={type}
        name={name}
        mask="(99) 99999-9999"
        value={value}
        onChange={onChange}
        className={cn(
          'h-11 w-full rounded-xl border border-solid bg-slate-50 px-4 py-2 sm:max-w-[17rem]',
          error ? 'border-red-100' : 'border-gray-300',
        )}
      />
    </InputLayout>
  )
}
