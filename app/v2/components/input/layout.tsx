import React, { PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'
import { InputLayoutV2Props } from '@/interfaces'
import { ErrorSvg } from '@/components/error'

export const InputLayout = ({
  label,
  isFocused,
  hasValue,
  children,
  error,
  name,
}: PropsWithChildren<InputLayoutV2Props>) => {
  return (
    <div className="relative flex w-full flex-col gap-1.5">
      {children}
      <label
        htmlFor={name}
        className={cn(
          'pointer-events-none absolute left-2.5 top-4 rounded-md bg-white-100 px-2 transition-all ease-in-out',
          isFocused || hasValue
            ? '-translate-x-2 -translate-y-7 scale-75 transform'
            : 'text-gray-500',
          isFocused ? 'text-blue-500' : 'text-gray-500',
          error && (isFocused || hasValue) ? 'text-red-100' : 'text-gray-500',
        )}
      >
        {label}
      </label>

      {error && (
        <div className="flex flex-row items-center gap-2">
          <ErrorSvg />
          <span className="text-xs font-normal text-red-100">{error}</span>
        </div>
      )}
    </div>
  )
}
