import styled from "styled-components"
import media from "styled-media-query"

import { FacebookCircle as Facebook } from "@styled-icons/boxicons-logos/FacebookCircle"
import { InstagramWithCircle as Instagram } from "@styled-icons/entypo-social/InstagramWithCircle"

export const FooterWrapper = styled.footer`
  color: #fff;
  font-size: 16px;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const FooterMain = styled.div`
  background: #000;
`

export const FooterMainSection = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 3fr 3fr;
  gap: 30px;
  padding: 100px 30px 90px;
  max-width: 1640px;
  margin: 0 auto;

  ${media.lessThan("910px")`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan("640px")`
    padding: 80px 20px;
    grid-template-columns: 1fr;
  `}
`

export const Logo = styled.div``

export const NavLinks = styled.ul``

export const LinkItem = styled.li`
  list-style-type: none;
`

export const VR = styled.div`
  a {
    font-weight: 700;
  }
`

export const VRTitle = styled.h5`
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 24px;
`

export const Address = styled.div``

export const FooterCopy = styled.div`
  background: #232323;
`

export const FooterCopySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  gap: 30px;
  padding: 40px 30px 30px;
  max-width: 1640px;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 12px;

  ${media.lessThan("600px")`
    grid-template-columns: 1fr 11fr;
    padding-bottom: 0;
  `}
`

export const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const FacebookIcon = styled(Facebook)`
  width: 40px;
`

export const InstagramIcon = styled(Instagram)`
  width: 34px;
  margin-top: 2px;
`

export const Copy = styled.div`
  text-align: right;

  a {
    font-weight: 700;
  }
`

export const VRLogo = styled.img`
  max-width: 40px;

  ${media.lessThan("600px")`
    display: none;
  `}
`
