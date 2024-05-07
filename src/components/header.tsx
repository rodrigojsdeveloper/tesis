import Image from 'next/image'
import logo from '@/src/assets/logo.png'

export const Header = () => {
  return (
    <header className="flex h-28 w-full items-center bg-white-100 px-4 py-4 sm:px-16">
      <Image
        src={logo}
        alt="Logo da TESIS"
        width={153}
        height={76}
        className="object-contain mix-blend-multiply"
      />
    </header>
  )
}
