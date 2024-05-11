import React, { useEffect, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { cn } from '@/src/utils/cn'
import { InputProps } from '@/src/interfaces'
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
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(Boolean(value))

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(Boolean(event.target.value))
    onChange(event)
  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    setHasValue(Boolean(event.target.value))
  }

  useEffect(() => {
    if (!value) {
      setHasValue(Boolean(value))
      setIsFocused(false)
    }
  }, [value])

  return (
    <InputLayout
      label={label}
      hasValue={hasValue}
      isFocused={isFocused}
      error={error}
    >
      <ReactInputMask
        {...register(name)}
        type={type}
        name={name}
        mask="(99) 99999-9999"
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        className={cn(
          'h-14 w-full rounded-md border border-solid px-3 transition-colors ease-in-out',
          isFocused ? 'border-2 border-blue-500' : 'border border-gray-300',
          error ? 'border-red-100' : 'border-gray-300',
          error && isFocused ? 'border-2' : 'border ',
        )}
      />
    </InputLayout>
  )
}
