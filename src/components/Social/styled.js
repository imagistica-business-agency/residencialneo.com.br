import styled from 'styled-components'

import { FacebookCircle as Facebook } from '@styled-icons/boxicons-logos/FacebookCircle'
import { InstagramWithCircle as Instagram } from '@styled-icons/entypo-social/InstagramWithCircle'
import { Whatsapp } from '@styled-icons/remix-fill/Whatsapp'
import { MailWithCircle as Mail } from '@styled-icons/entypo-social/MailWithCircle'

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FacebookIcon = styled(Facebook)`
  width: 30px;
  margin-right: 5px;
`

export const InstagramIcon = styled(Instagram)`
  width: 26px;
  margin-top: 2px;
  margin-right: 5px;
`

export const WhatsappIcon = styled(Whatsapp)`
  width: 30px;
  margin-right: 5px;
`

export const MailIcon = styled(Mail)`
  width: 36px;
  margin-top: 2px;
`
