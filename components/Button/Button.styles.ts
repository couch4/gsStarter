import { lighten, darken } from 'polished'
import { ButtonTypes } from './Button.types'
import colours from '@theme/colors'

const heights = {
  xs: 2.5,
  sm: 3,
  md: 3.5,
}

const { xs, sm, md } = heights

const sizes = {
  xs: {
    height: `${xs}rem`,
    maxHeight: `${xs}rem`,
    borderRadius: `${xs / 10}rem`,
  },
  sm: {
    height: `${sm}rem`,
    maxHeight: `${sm}rem`,
    borderRadius: `${sm / 10}rem`,
  },
  md: {
    height: `${md}rem`,
    maxHeight: `${md}rem`,
    borderRadius: `${md / 10}rem`,
  },
}

const Button = {
  baseStyle: {
    textStyle: 'button',
    display: 'flex',
    color: 'white',
    background: 'brand.teal',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.3s background',
    flex: 1,
  },
  sizes,
  variants: {
    [ButtonTypes.Primary]: {
      _hover: {
        background: lighten(0.1, colours.brand.teal),
      },
    },
    [ButtonTypes.Secondary]: {
      background: 'white',
      color: 'brand.charcoal',
      _hover: {
        background: darken(0.05, 'white'),
      },
    },
    base: {
      ...sizes.xs,
    },
    sm: {
      ...sizes.sm,
    },
    md: {
      ...sizes.md,
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
}

export default Button
