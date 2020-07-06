import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    line-height: 1.5;
  }

  h1, h2, h3, h4 {
    font-family: 'Krona one', sans-serif;
  }

  h2 {
    font-size: 40px;
  }
`

export default GlobalStyles
