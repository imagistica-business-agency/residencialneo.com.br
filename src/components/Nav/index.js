import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import * as S from "./styled"
import logo from "../../images/logo.svg"

const Nav = () => (
  <S.NavWrapper>
    <S.NavMain>
      <Link to="/" alt="Início" stripHash>
        <S.Logo src={logo} alt="" />
      </Link>

      <S.NavLinks>
        <S.LinkItem>
          <Link to="/" alt="Início" stripHash>
            Início
          </Link>
        </S.LinkItem>
        <S.LinkItem>
          <AnchorLink to="/#plantas" alt="Plantas" stripHash>
            Plantas
          </AnchorLink>
        </S.LinkItem>
        <S.LinkItem>
          <AnchorLink to="/#experience" alt="Experience" stripHash>
            Experience
          </AnchorLink>
        </S.LinkItem>
        <S.LinkItem>
          <AnchorLink to="/#exclusivo" alt="Exclusivo" stripHash>
            Exclusivo
          </AnchorLink>
        </S.LinkItem>
        <S.LinkItem>
          <AnchorLink to="/#diferenciais" alt="Diferenciais" stripHash>
            Diferenciais
          </AnchorLink>
        </S.LinkItem>
        <S.LinkItem>
          <AnchorLink to="/#novidades" alt="Novidade" stripHash>
            Novidade
          </AnchorLink>
        </S.LinkItem>
        <S.LinkItem>
          <AnchorLink to="#" alt="Downloads">
            Downloads
          </AnchorLink>
        </S.LinkItem>
      </S.NavLinks>
      <S.Button>Agende sua visita</S.Button>
    </S.NavMain>
  </S.NavWrapper>
)

export default Nav
