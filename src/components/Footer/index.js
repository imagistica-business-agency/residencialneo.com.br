import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Social from '../Social'

import * as S from './styled'
import logo from '../../images/logo.svg'
import VRLogo from '../../images/VRLogo.svg'

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterMain>
      <S.FooterMainSection>
        <S.Logo>
          <Link to="/" alt="Início" stripHash>
            <img src={logo} alt="Residencial Neo" />
          </Link>
        </S.Logo>
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
            <AnchorLink to="/downloads#downloads" alt="Downloads" stripHash>
              Downloads
            </AnchorLink>
          </S.LinkItem>
        </S.NavLinks>
        <S.VR>
          <S.VRTitle>Grupo VR Investimentos</S.VRTitle>
          <p>
            A{' '}
            <a
              href="http://valorrealinvest.com.br/"
              alt="VR Investimentos"
              rel="noopener noreferrer"
              target="_blank"
            >
              VR Investimentos
            </a>{' '}
            tem as melhores oportunidades de investimentos imobiliários no oeste
            do Paraná.
          </p>
        </S.VR>
        <S.Address>
          <p>
            Rua Minas Gerais, 618 - Vila Maracanã
            <br />
            Foz do Iguaçu - PR
            <br />
            (45) 3029 4010
            <br />
            <a
              href="mailto:valorrealfoz@vrplaneja.com.br"
              alt="valorrealfoz@vrplaneja.com.br"
            >
              valorrealfoz@vrplaneja.com.br
            </a>
          </p>
        </S.Address>
      </S.FooterMainSection>
    </S.FooterMain>
    <S.FooterCopy>
      <S.FooterCopySection>
        <Social />
        <S.Copy>
          {new Date().getFullYear()} © Residencial NEO. Todos os direitos
          reservados.
          <br /> Desenvolvido por{' '}
          <a
            href="https://www.imagistica.com.br/"
            alt="Imagística Business Agency"
            rel="noopener noreferrer"
            target="_blank"
          >
            Imagística Business Agency
          </a>
          .
        </S.Copy>
        <a
          href="http://valorrealinvest.com.br/"
          alt="VR Investimentos"
          rel="noopener noreferrer"
          target="_blank"
        >
          <S.VRLogo src={VRLogo} alt="" />
        </a>
      </S.FooterCopySection>
    </S.FooterCopy>
  </S.FooterWrapper>
)

export default Footer
