import { cn } from '../utils/cn'

interface BackgroundProps {
  className: string
}

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
