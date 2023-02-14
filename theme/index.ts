import { extendTheme } from '@chakra-ui/react'
import rgba from '@utils/rgba'
import { fonts, fontSizes, lineHeights, textStyles } from './typography'
import { ButtonStyles } from '@components'
import colors from './colors'

export const breakpoints = {
  sm: '320px',
  md: '600px',
  lg: '960px',
  xl: '1920px',
}

const theme = {
  breakpoints,
  fonts,
  textStyles,
  fontSizes,
  lineHeights,
  colors,
  styles: {
    global: {
      '*:not(input, textarea)': {
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        overscrollBehavior: 'none',
        WebkitOverflowScrolling: 'none',
        WebkitBackfaceVisibility: 'hidden',
        outline: 'none',
      },
      'html, body': {
        background: rgba('brand.pink', 0.4),
        margin: 0,
        fontSize: '16px',
        color: 'brand.charcoal',
        overflow: 'hidden',
        maxWidth: '100%',
        scrollBehavior: 'smooth',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      html: {
        height: '100vh',
        minHeight: '100%',
      },
      body: {
        background: 'brand.bg',
        position: 'relative',
        height: '100%',
      },
      '#root': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 15,
        overflowY: 'auto',
        overscrollBehavior: 'none',
      },
      'div[class*="render-actions__ActionsWrapper"]': {
        display: 'none',
      },
      'div[class*="timer__Text"]': {
        display: 'none',
      },
      'div[class*="countdown"]': {
        fontFamily: 'copyBold',
        opacity: 0.5,
      },
      '.SVGInline': {
        display: 'none',
      },
      '.react-html5-camera-photo video': {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        backfaceVisibility: 'visible',
      },
      '#container-circles': {
        position: 'fixed',
        bottom: '7rem',
      },
      '.reactEasyCrop_Container': {
        pointerEvents: 'none',
      },
    },
  },
  components: {
    Button: ButtonStyles,
  },
  sizes: {
    container: {
      sm: 'calc(100vw - 2rem)',
      md: 'calc(100vw - 160px)',
      lg: 'calc(100vw - 300px)',
      xl: '1620px',
    },
  },
  spacing: {
    xs: '1rem',
    sm: '2rem',
  },
}

const customTheme = extendTheme(theme)

export default customTheme
