import './fonts.css'

export const fonts = {
  heading: 'Grotesk, sans-serif',
  copy: 'Inter, sans-serif',
  decoration: 'Queens, serif',
  italic: 'QueensLight, serif',
}

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
}

export const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
}

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

const heading = {
  fontFamily: fonts.heading,
  color: 'brand.charcoal',
  mb: { base: '0.625rem', md: '1rem' },
}

export const textStyles = {
  h1: {
    ...heading,
    as: 'h1',
    textTransform: 'uppercase',
    fontSize: { base: '3xl', md: '6xl', lg: '9xl' },
    lineHeight: { base: 'none' },
  },
  h2: {
    ...heading,
    as: 'h2',
    fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
    lineHeight: { base: 'xl', md: '2xl', lg: '3xl' },
  },
  h3: {
    ...heading,
    as: 'h3',
    fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
    lineHeight: { base: 'lg', md: 'xl', lg: '2xl' },
  },
  h4: {
    ...heading,
    as: 'h4',
    fontSize: { base: 'md', md: 'lg', lg: 'xl' },
    lineHeight: { base: 'md', md: 'lg', lg: 'xl' },
  },
  button: {
    fontWeight: 800,
  },
  copy: {
    color: 'brand.charcoal',
    fontFamily: 'copy',
    fontWeight: 400,
    fontSize: { base: 'xs', lg: 'md' },
    lineHeight: { base: 'md', md: 'lg' },
  },
}
