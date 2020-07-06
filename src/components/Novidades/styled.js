import styled from "styled-components"
import { Link } from "gatsby"

import { RightArrowAlt as Arrow } from "@styled-icons/boxicons-regular/RightArrowAlt"

export const NovidadesWrapper = styled.section`
  padding: 100px 30px;
  max-width: 1640px;
  margin: 0 auto;
  font-size: 16px;
`

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 90px;
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
