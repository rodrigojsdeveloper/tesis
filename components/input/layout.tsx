import React, { PropsWithChildren } from 'react'
import { InputLayoutProps } from '../../interfaces'
import { ErrorSvg } from '../error'

export const InputLayout = ({
  label,
  error,
  children,
}: PropsWithChildren<InputLayoutProps>) => {
  return (
    <div className="flex flex-col justify-between gap-1.5 sm:flex-row sm:items-center">
      <label className="text-lg font-medium text-blue-200">{label}:</label>
      <div className="flex flex-col gap-1">
        {children}

        {error && (
          <div className="flex flex-row items-center gap-2">
            <ErrorSvg />
            <span className="text-xs font-normal text-red-100">{error}</span>
          </div>
        )}
      </div>
    </div>
  )
}
