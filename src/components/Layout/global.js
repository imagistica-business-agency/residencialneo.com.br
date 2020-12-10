import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    line-height: 1.5;

    ${media.lessThan('1200px')`
      font-size: 16px;
    `}
  }

  h1, h2, h3, h4 {
    font-family: 'Krona one', sans-serif;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 40px;

    span.small {
      font-size: 20px;

      ${media.lessThan('1200px')`
        font-size: 16px;
      `}
    }

    ${media.lessThan('1200px')`
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

  .video {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  margin-bottom: 3rem;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.float{
	position:fixed;

	bottom:40px;
	right:40px;

}

.bounce {
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%,
    25%,
    50%,
    75%,
    100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(-20px);
    }
    60% {
        transform: translateX(-12px);
    }
}
`

export default GlobalStyles
