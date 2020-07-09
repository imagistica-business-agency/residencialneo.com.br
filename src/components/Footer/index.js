import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import * as S from "./styled"
import logo from "../../images/logo.svg"
import VRLogo from "../../images/VRLogo.svg"

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterMain>
      <S.FooterMainSection>
        <S.Logo>
          <img src={logo} alt="Residencial Neo" />
        </S.Logo>
        <S.NavLinks>
          <S.LinkItem>
            <AnchorLink to="/" alt="Início" stripHash>
              Início
            </AnchorLink>
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
        <S.VR>
          <S.VRTitle>Grupo VR Investimentos</S.VRTitle>
          <p>
            A{" "}
            <a
              href="http://valorrealinvest.com.br/"
              alt="VR Investimentos"
              rel="noopener noreferrer"
              target="_blank"
            >
              VR Investimentos
            </a>{" "}
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
        <S.SocialLinks>
          <a
            href="https://facebook.com/"
            alt="Facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.FacebookIcon />
          </a>
          <a
            href="https://facebook.com/"
            alt="Facebook"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.InstagramIcon />
          </a>
        </S.SocialLinks>
        <S.Copy>
          2020 © Residencial NEO. Todos os direitos reservados.
          <br /> Desenvolvido por{" "}
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
