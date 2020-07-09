import { createGlobalStyle } from "styled-components"
import media from "styled-media-query"

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

    ${media.lessThan("1200px")`
      font-size: 16px;
    `}
  }

  h1, h2, h3, h4 {
    font-family: 'Krona one', sans-serif;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 40px;

    span.small {
      font-size: 25px;

      ${media.lessThan("1200px")`
        font-size: 16px;
      `}
    }

    ${media.lessThan("1200px")`
      font-size: 22px;
    `}
  }

  p {
    margin-bottom: 16px;
  }

  td {
    height: 50px;
    border-bottom: 1px solid #c0c0c0;
  }
`

export default GlobalStyles
