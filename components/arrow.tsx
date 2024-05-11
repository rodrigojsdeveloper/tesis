import Image from 'next/image'
import { ImageProps } from '../interfaces'

export const Arrow = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={28}
      height={28}
      className="hidden sm:block"
    />
  )
}
