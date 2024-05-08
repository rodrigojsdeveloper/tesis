import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { cn } from '@/src/utils/cn'

interface InputProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputMaskCorrect: React.FC<React.ComponentProps<typeof InputMask>> = (
  props,
) => {
  return <InputMask {...props} />
}

export const Input = ({ label, type, name, value, onChange }: InputProps) => {
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

  const handleBlur = () => {
    setIsFocused(false)
  }

  useEffect(() => {
    setHasValue(Boolean(value))
  }, [value])

  const inputField =
    type === 'tel' ? (
      <InputMaskCorrect
        mask="(99) 99999-9999"
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn(
          'h-14 w-full rounded-md border border-solid px-3 transition-colors ease-in-out',
          isFocused ? 'border-2 border-blue-500' : 'border border-gray-300',
        )}
      >
        <input type="tel" name={name} required />
      </InputMaskCorrect>
    ) : (
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn(
          'h-14 w-full rounded-md border border-solid px-3 transition-colors ease-in-out',
          isFocused ? 'border-2 border-blue-500' : 'border border-gray-300',
        )}
      />
    )

  return (
    <div className="relative h-16 w-full">
      {inputField}
      <label
        className={cn(
          'pointer-events-none absolute left-2.5 top-4 rounded-md bg-white-100 px-2 transition-all ease-in-out',
          isFocused || hasValue
            ? '-translate-x-2 -translate-y-7 scale-75 transform'
            : 'text-gray-500',
          isFocused ? 'text-blue-500' : 'text-gray-500',
        )}
      >
        {label}
      </label>
    </div>
  )
}
