import styled from "styled-components"
import media from "styled-media-query"
import BackgroundImage from "gatsby-background-image"

export const PlantasWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.lessThan("890px")`
    grid-template-columns: 1fr;
  `}
`

export const TextWrapper = styled.div`
  margin: 80px 10%;
`

export const Button = styled.button`
  background: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: black;
    color: white;
  }
`

export const Image = styled(BackgroundImage)`
  ${media.lessThan("890px")`
    height: 200px;
  `}
`
