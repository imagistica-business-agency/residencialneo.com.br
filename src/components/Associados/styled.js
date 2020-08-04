import styled from 'styled-components'
import media from 'styled-media-query'
import BackgroundImage from 'gatsby-background-image'

export const AssociadosWrapper = styled.section``

export const Image = styled(BackgroundImage)`
  padding: 200px 0 150px;
`

export const Title = styled.h2`
  color: #fff;
  font-size: 60px;
  text-align: center;

  ${media.lessThan('980px')`
    font-size: 40px;
  `}

  ${media.lessThan('600px')`
    font-size: 30px;
  `}

  ${media.lessThan('500px')`
    font-size: 20px;
  `}
`

export const Big = styled.span`
  font-size: 80px;

  ${media.lessThan('980px')`
    font-size: 50px;
  `}

  ${media.lessThan('600px')`
    font-size: 40px;
  `}

  ${media.lessThan('500px')`
    font-size: 30px;
  `}
`

export const ButtonWrapper = styled.div`
  text-align: center;
`
