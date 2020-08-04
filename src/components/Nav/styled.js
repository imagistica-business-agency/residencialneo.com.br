import styled from 'styled-components'
import media from 'styled-media-query'

export const NavWrapper = styled.nav`
  position: fixed;
  height: 64px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;

  a {
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }

    ${media.lessThan('1005px')`
      font-size: 12px;
    `}
  }

  ${media.lessThan('960px')`
    height: 60px;
  `}

  ${media.lessThan('670px')`
    /* background-color: rgba(0, 0, 0, 0.5); */
    display: none;
  `}
`

export const NavMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 1fr;
  gap: 30px;
  padding: 16px 30px;
  max-width: 1340px;
  margin: 0 auto;

/*   ${media.lessThan('1225px')`
    grid-template-columns: 1fr 10fr 3fr;
  `} */

/*   ${media.lessThan('999px')`
    grid-template-columns: 1fr 10fr;
  `} */

  ${media.lessThan('960px')`
    padding-top: 15px;
  `}
`

export const Logo = styled.img`
  height: 32px;

  ${media.lessThan('960px')`
    height: 30px;
  `}
`

export const Nav = styled.nav``

export const NavLinks = styled.ul`
  text-align: center;
`

export const LinkItem = styled.li`
  display: inline-block;
  padding: 3px 10px;

  /* ${media.lessThan('1200px')`
      padding-top: 8px;
    `} */

  ${media.lessThan('960px')`
      padding-top: 3px;
  `}
`
