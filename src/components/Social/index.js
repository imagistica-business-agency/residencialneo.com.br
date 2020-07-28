import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

import * as S from "./styled"

const Social = () => (
  <S.SocialLinks>
    <a
      href="https://facebook.com/vrinvestimentos"
      alt="Facebook"
      rel="noopener noreferrer"
      target="_blank"
    >
      <S.FacebookIcon />
    </a>
    <a
      href="https://instagram.com/vrinvestimentos"
      alt="Instagram"
      rel="noopener noreferrer"
      target="_blank"
    >
      <S.InstagramIcon />
    </a>
    <OutboundLink
      href="https://wa.me/554599138889"
      rel="noopener noreferrer"
      target="_blank"
    >
      <S.WhatsappIcon />
    </OutboundLink>
    {/* <Link to="/">
      <S.MailIcon />
    </Link> */}
  </S.SocialLinks>
)

export default Social
