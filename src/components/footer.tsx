import Image from 'next/image'
import logo from '@/src/assets/logo.svg'

export const Footer = () => {
  return (
    <footer className="bg-white-200 flex h-48 w-full items-center justify-center p-4">
      <Image src={logo} alt="Logo da TESIS" width={153} height={76} />
    </footer>
  )
}
