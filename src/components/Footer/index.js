import React from "react"

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
            <a href="/" alt="Início">
              Início
            </a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#plantas" alt="Plantas">
              Plantas
            </a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#experience" alt="Experience">
              Experience
            </a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#exclusivo" alt="Exclusivo">
              Exclusivo
            </a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#diferenciais" alt="Diferenciais">
              Diferenciais
            </a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#novidades" alt="Novidade">
              Novidade
            </a>
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
