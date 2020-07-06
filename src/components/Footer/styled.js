import styled from "styled-components"

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
  padding: 100px 0 90px;
  max-width: 1640px;
  margin: 0 auto;
`

export const Logo = styled.div``

export const NavLinks = styled.ul``

export const LinkItem = styled.li`
  list-style-type: none;
`

export const VR = styled.div``

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
  padding: 40px 0 30px;
  max-width: 1640px;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 12px;
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
