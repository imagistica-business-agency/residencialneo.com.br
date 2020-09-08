import styled from 'styled-components'
import media from 'styled-media-query'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Img from 'gatsby-image'

export const PlantasWrapper = styled.section`
  margin: 80px 5%;

  ${media.lessThan('890px')`
    grid-template-columns: 1fr;
  `}
`

export const PlantaTabs = styled(Tabs)``

export const PlantaTabList = styled(TabList)`
  display: flex;
  list-style-type: none;
  margin-bottom: 40px;
`

export const PlantaTab = styled(Tab)`
  background: transparent;
  border: 1px solid black;
  padding: 10px 50px;
  margin-right: 20px;
  font-family: inherit;
  font-size: 14px;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: black;
    color: white;
  }

  &.white {
    color: white;
    border-color: white;

    &:hover {
      background: white;
      color: black;
    }
  }

  &.react-tabs__tab--selected {
    background: black;
    color: white;
  }
`

export const PlantaTabPanel = styled(TabPanel)`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 2rem;

  ${media.lessThan('890px')`
    grid-template-columns: 1fr;
  `}
`

export const TextWrapper = styled.div``

export const ButtonWrapper = styled.div`
  margin-top: 40px;
`

export const Image = styled(Img)`
  picture > img {
    height: auto !important;
  }
  > img {
    height: auto !important;
  }
`
