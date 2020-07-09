import styled from "styled-components"
import media from "styled-media-query"
import BackgroundImage from "gatsby-background-image"

export const DiferenciaisWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.lessThan("890px")`
    grid-template-columns: 1fr;
  `}
`

export const TextWrapper = styled.div`
  margin: 280px 10%;

  ${media.lessThan("1200px")`
    margin: 180px 10%;
  `}

  ${media.lessThan("800px")`
    margin: 100px 10%;
  `}

  ${media.lessThan("600px")`
    margin: 80px 10%;
  `}
`

export const Image = styled(BackgroundImage)`
  ${media.lessThan("890px")`
    height: 700px;
  `}
`
