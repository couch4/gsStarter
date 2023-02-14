import { StackProps } from '@chakra-ui/react'

export enum AnimatedStackTypes {
  Column = 'column',
  Row = 'row',
}

export type AnimatedStackVariantTypes = `${AnimatedStackTypes}`

export interface IAnimatedStack extends StackProps {
  variant?: AnimatedStackVariantTypes
  delay?: number
  duration?: number
}
