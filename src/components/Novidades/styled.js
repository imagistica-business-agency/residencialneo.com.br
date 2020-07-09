import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

import { RightArrowAlt as Arrow } from "@styled-icons/boxicons-regular/RightArrowAlt"

export const NovidadesWrapper = styled.section`
  padding: 100px 30px;
  max-width: 1640px;
  margin: 0 auto;
  font-size: 16px;

  ${media.lessThan("640px")`
    padding: 80px 20px;
  `}
`

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;

  ${media.lessThan("910px")`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan("640px")`
    grid-template-columns: 1fr;
  `}
`

export const BlogItem = styled.div``

export const BlogItemLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const BlogItemImage = styled.div`
  background: red;
  width: 100%;
  height: 350px;

  ${media.lessThan("1200px")`
    height: 250px;
  `}
`

export const BlogItemTitle = styled.h5`
  font-size: 26px;
  font-weight: 500;
  margin: 16px 0;
`

export const BlogItemDescription = styled.div`
  margin: 0 0 16px;
`

export const ArrowIcon = styled(Arrow)`
  width: 20px;
`
