import { BoxProps } from '@chakra-ui/react'

export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
}

export type ButtonVariantTypes = `${ButtonTypes}`

export interface IButton extends BoxProps {
  text: string
  onClick?: () => void
  variant?: ButtonVariantTypes
  size?: string
}
