import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const HeaderWrapper = styled(Img)`
  background: gray;
  height: 100vh;
  z-index: -1;

  ${media.lessThan('960px')`
    height: 70vh;
  `}

  ${media.lessThan('670px')`
    height: 50vh;
  `}
`
