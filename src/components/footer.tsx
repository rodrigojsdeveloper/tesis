import Image from 'next/image'
import logo from '@/src/assets/logo.svg'

export const Footer = () => {
  return (
    <footer className="flex h-48 w-full items-center justify-center bg-white-300 p-4">
      <Image src={logo} alt="Logo da TESIS" width={153} height={76} />
    </footer>
  )
}
