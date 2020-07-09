import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const Header = styled(BackgroundImage)`
  padding: 290px 15% 250px;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
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
  }

  figcaption {
    display: none;
  }
`
