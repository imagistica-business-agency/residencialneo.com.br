import styled from 'styled-components'
import media from 'styled-media-query'
import BackgroundImage from 'gatsby-background-image'

export const ExperienceWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: black;
  color: white;

  ${media.lessThan('890px')`
    grid-template-columns: 1fr;
  `}
`

export const TextWrapper = styled.div`
  margin: 90px 10%;

  ${media.lessThan('600px')`
    margin: 80px 10%;
  `}
`

export const ButtonWrapper = styled.div`
  margin-top: 40px;
`

export const Image = styled(BackgroundImage)`
  ${media.lessThan('890px')`
    height: 700px;
  `}
`
