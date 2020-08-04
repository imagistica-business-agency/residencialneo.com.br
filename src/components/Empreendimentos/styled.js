import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const EmpreendimentosWrapper = styled.section`
  background: black;
  color: white;
  text-align: center;
  padding: 5%;

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;

  ${media.lessThan('1160px')`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  ${media.lessThan('768px')`
  grid-template-columns: 1fr 1fr 1fr;
  `}

  ${media.lessThan('500px')`
  grid-template-columns: 1fr 1fr;
  `}
`

export const EmpreendimentoWrapper = styled.div``

export const EmpreendimentoImg = styled(Img)`
  margin-bottom: 20px;
`
