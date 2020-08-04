import styled from 'styled-components'
import media from 'styled-media-query'
import BackgroundImage from 'gatsby-background-image'

export const Header = styled(BackgroundImage)`
  padding: 290px 15% 250px;

  ${media.lessThan('600px')`
    padding: 190px 15% 150px;
  `}
`

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  ${media.lessThan('600px')`
    font-size: 26px;
  `}
`

export const PostWrapper = styled.div`
  padding: 100px 30px;
  max-width: 1640px;
  margin: 0 auto;

  h2,
  h3,
  h4,
  h5 {
    margin-top: 80px;
  }

  h2 {
    font-size: 26px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 20px;
  }

  p,
  h2,
  h3,
  h4,
  h5 {
    max-width: 1000px;
    margin-left: 320px;
    margin-right: 320px;

    ${media.lessThan('1500px')`
      margin-left: 200px;
      margin-right: 200px;
    `}

    ${media.lessThan('1100px')`
      margin-left: 100px;
      margin-right: 100px;
    `}

    ${media.lessThan('770px')`
      margin-left: 40px;
      margin-right: 40px;
    `}
  }

  figcaption {
    display: none;
  }

  ${media.lessThan('600px')`
    padding: 80px 0;

    h2,
    h3,
    h4,
    h5 {
      margin-top: 60px;
    }

    p,
    h2,
    h3,
    h4,
    h5 {
      margin-left: 20px;
      margin-right: 20px;
    }
  `}
`
