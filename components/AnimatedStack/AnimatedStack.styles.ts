import { motion } from 'framer-motion'
import { AnimatedStackVariantTypes } from './AnimatedStack.types'

const animatedStackVariants = (delay: number, duration?: number) => ({
  active: {
    transition: {
      delayChildren: delay,
      staggerChildren: duration || 0.2,
    },
  },
})

export const animatedStackWrapper = (
  variant: AnimatedStackVariantTypes,
  delay: number,
  duration?: number,
) => ({
  as: motion.div,
  direction: variant,
  initial: 'inactive',
  animate: 'active',
  variants: animatedStackVariants(delay, duration),
})
