import { FC } from 'react'
import { Stack } from '@chakra-ui/react'
import { AnimatedStackTypes, IAnimatedStack } from './AnimatedStack.types'
import { animatedStackWrapper } from './AnimatedStack.styles'

export const AnimatedStack: FC<IAnimatedStack> = ({
  variant = AnimatedStackTypes.Column,
  children,
  delay = 0,
  duration,
  ...restProps
}) => {
  return (
    <Stack {...animatedStackWrapper(variant, delay, duration)} {...restProps}>
      {children}
    </Stack>
  )
}

export default AnimatedStack
