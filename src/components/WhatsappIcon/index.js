import React from 'react'

import whatsappIcon from '../../images/whatsappIcon.svg'
import * as S from './styled'

const WhatsappIcon = () => (
  <S.WhatsappWrapper>


<a href="https://api.whatsapp.com/send?phone=5545991368889&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20*Residencial%20NEO*" class="float bounce" target="_blank">
<img src={whatsappIcon} alt="" />
</a>
   
  </S.WhatsappWrapper>
)

export default WhatsappIcon
