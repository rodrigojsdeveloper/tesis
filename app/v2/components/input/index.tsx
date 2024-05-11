import React, { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'
import { InputProps } from '@/interfaces'
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

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.stopPropagation()
    setIsFocused(false)
  }

  useEffect(() => {
    setHasValue(Boolean(value))

    if (!value) {
      setHasValue(Boolean(value))
      setIsFocused(false)
    }
  }, [value])

  const {
    onChange: onRegisterChange,
    onBlur: onRegisterBlur,
    ref,
    ...restRegisterProps
  } = register(name)

  return (
    <InputLayout
      label={label}
      hasValue={hasValue}
      isFocused={isFocused}
      error={error}
    >
      <input
        {...restRegisterProps}
        ref={ref}
        onChange={(e) => {
          onRegisterChange(e)
          handleInputChange(e)
        }}
        onBlur={(e) => {
          onRegisterBlur(e)
          handleBlur(e)
        }}
        type={type}
        name={name}
        value={value}
        onFocus={handleFocus}
        className={cn(
          'h-14 w-full rounded-md border border-solid px-3 transition-colors ease-in-out',
          error ? 'border-red-100' : 'border-gray-300',
          error && isFocused ? 'border-2' : 'border ',
        )}
      />
    </InputLayout>
  )
}
