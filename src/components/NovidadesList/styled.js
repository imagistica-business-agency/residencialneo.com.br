import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { RightArrowAlt as Arrow } from '@styled-icons/boxicons-regular/RightArrowAlt'

export const NovidadesListWrapper = styled.section`
  max-width: 1640px;
  margin: 0 auto;
  font-size: 12px;

  ${media.lessThan('640px')`
    padding: 0;
  `}
`

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;

  ${media.lessThan('910px')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan('640px')`
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

export const BlogItemImage = styled(Img)`
  width: 100%;
  height: 350px;
  z-index: -100;

  ${media.lessThan('1200px')`
    height: 250px;
  `}
`

export const BlogItemTitle = styled.h5`
  font-size: 16px;
  font-weight: 500;
  margin: 16px 0;
`

export const BlogItemDescription = styled.div`
  margin: 0 0 16px;
`

export const ArrowIcon = styled(Arrow)`
  width: 16px;
`
