import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface ImageProps {
  src: StaticImport
  alt: string
}

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
