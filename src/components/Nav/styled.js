import styled from "styled-components"
import media from "styled-media-query"

export const NavWrapper = styled.nav`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;

  ${media.lessThan("960px")`
    height: 60px;
  `}

  ${media.lessThan("670px")`
    background-color: rgba(0, 0, 0, 0.5);
  `}
`

export const NavMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 2fr;
  gap: 30px;
  padding: 20px 30px;
  max-width: 1640px;
  margin: 0 auto;

  ${media.lessThan("960px")`
    padding-top: 15px;
  `}
`

export const Logo = styled.img`
  height: 40px;

  ${media.lessThan("960px")`
    height: 30px;
  `}
`
