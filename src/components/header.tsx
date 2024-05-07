import Image from 'next/image'
import logo from '@/src/assets/logo.svg'

export const Header = () => {
  return (
    <header className="bg-white-200 flex h-28 w-full items-center px-4 py-4 sm:px-16">
      <Image src={logo} alt="Logo da TESIS" width={153} height={76} />
    </header>
  )
}
