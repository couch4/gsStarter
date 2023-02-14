import theme from '../theme/index'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  chakra: {
    theme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Components'],
    },
  },
}
