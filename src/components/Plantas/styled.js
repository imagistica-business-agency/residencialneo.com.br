import styled from "styled-components"
import media from "styled-media-query"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

export const PlantasWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.lessThan("890px")`
    grid-template-columns: 1fr;
  `}
`

export const PlantaTab = styled(Tab)``

export const PlantaTabs = styled(Tabs)``

export const PlantaTabList = styled(TabList)``

export const PlantaTabPanel = styled(TabPanel)``

export const TextWrapper = styled.div`
  margin: 80px 10%;
`

export const ButtonWrapper = styled.div`
  margin-top: 40px;
`

export const Image = styled.img``
