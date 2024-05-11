import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { LucideIcon } from 'lucide-react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface InputProps {
  label: string
  type: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  register: UseFormRegister<FieldValues>
  error?: string
}

export interface InputLayoutProps {
  label: string
  error?: string
}

export interface InputLayoutV2Props extends InputLayoutProps {
  isFocused: boolean
  hasValue: boolean
}

export interface FormProps {
  name: string
  email: string
  company: string
  cellphone: string
}

export interface ServiceV2Props {
  title: string
  description: string
  Icon: LucideIcon
}

export interface ServiceProps {
  index: number
  description: string
}

export interface AddressProps {
  label: string
  contact: string
}

export interface ImageProps {
  src: StaticImport
  alt: string
}

export interface BackgroundProps {
  className: string
}
