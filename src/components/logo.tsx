import Image from 'next/image'
import logo from '@/src/assets/logo.svg'

export const Logo = () => {
  return <Image src={logo} alt="Logo da TESIS" width={153} height={76} />
}
