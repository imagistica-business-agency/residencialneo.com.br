import React from 'react'

import * as S from './styled'

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
    <a
      href="https://api.whatsapp.com/send?phone=5545991368889&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20*Residencial%20NEO*"
      rel="noopener noreferrer"
      target="_blank"
    >
      <S.WhatsappIcon />
    </a>
    {/* <Link to="/">
      <S.MailIcon />
    </Link> */}
  </S.SocialLinks>
)

export default Social
