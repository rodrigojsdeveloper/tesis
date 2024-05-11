import { BackgroundProps } from '../interfaces'
import { cn } from '../utils/cn'

export const Background = ({ className }: BackgroundProps) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-x-0 from-black/50 to-transparent',
        className,
      )}
    />
  )
}
