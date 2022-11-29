import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/global'
import Theme from '../src/styles/themes/light'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {Story()}
    </ThemeProvider>
  ),
]
