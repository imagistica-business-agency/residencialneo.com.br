import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { DotCircle as Dot } from "@styled-icons/fa-regular/DotCircle"

export const ExperienceWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const TextWrapper = styled.div`
  margin: 180px 10%;
`

export const Image = styled(BackgroundImage)``

export const DotIcon = styled(Dot)`
  width: 10px;
  margin-right: 15px;
`
