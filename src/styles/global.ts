import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
${normalize};
* {
  box-sizing: border-box;
}
body {
  font-family: 'Jakarta-Plus-Sans', -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
h1 {
  margin-bottom: 1.375rem;

  font-size: 2.25rem;
  font-weight: 700;
  line-height: 130%;
}

h2 {
  margin-bottom: 1.5rem;

  font-size: 1.75rem;
  font-weight: 700;
  line-height: 120%;
}

h3 {
  margin-bottom: 0.25rem;

  font-size: 1rem;
  font-weight: 700;
  line-height: 150%;
}
`
export default GlobalStyle
