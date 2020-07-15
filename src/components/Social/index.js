import React from "react"
import { Link } from "gatsby"

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
    <Link to="/">
      <S.WhatsappIcon />
    </Link>
    <Link to="/">
      <S.MailIcon />
    </Link>
  </S.SocialLinks>
)

export default Social
