import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Empreendimentos = () => {
  const data = useStaticQuery(
    graphql`
      query {
        balcony: file(relativePath: { eq: "Balcony.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        portoFino: file(relativePath: { eq: "PortoFino.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        premiere: file(relativePath: { eq: "Premiere.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        renascence: file(relativePath: { eq: "Renascence.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        provence: file(relativePath: { eq: "Provence.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        esmeralda: file(relativePath: { eq: "Esmeralda.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bellaCita: file(relativePath: { eq: "BellaCita.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const balcony = data.balcony.childImageSharp.fluid
  const portoFino = data.portoFino.childImageSharp.fluid
  const premiere = data.premiere.childImageSharp.fluid
  const renascence = data.renascence.childImageSharp.fluid
  const provence = data.provence.childImageSharp.fluid
  const esmeralda = data.esmeralda.childImageSharp.fluid
  const bellaCitta = data.bellaCita.childImageSharp.fluid

  return (
    <S.EmpreendimentosWrapper>
      <h2>
        <span className="small">Empreendimentos</span>
        <br />
        VR Investimentos
        <br />
        <span className="small">em Foz do Iguaçu</span>
      </h2>
      <S.Container>
        <S.EmpreendimentoWrapper>
          <a
            href="https://residencialbalcony.com.br/"
            alt="Edifício Balcony"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.EmpreendimentoImg fluid={balcony} />
            Edifício Balcony
          </a>
        </S.EmpreendimentoWrapper>
        <S.EmpreendimentoWrapper>
          <a
            href="https://residencialportofino.com.br/"
            alt="Edifício Porto Fino"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.EmpreendimentoImg fluid={portoFino} />
            Edifício Porto Fino
          </a>
        </S.EmpreendimentoWrapper>
        <S.EmpreendimentoWrapper>
          <a
            href="http://valorrealinvest.com.br/"
            alt="Edifício Premiere Office"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.EmpreendimentoImg fluid={premiere} />
            Edifício Premiere Office
          </a>
        </S.EmpreendimentoWrapper>
        <S.EmpreendimentoWrapper>
          <a
            href="http://valorrealinvest.com.br/"
            alt="Residencial Provence"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.EmpreendimentoImg fluid={provence} />
            Residencial Provence
          </a>
        </S.EmpreendimentoWrapper>
        <S.EmpreendimentoWrapper>
          <a
            href="http://valorrealinvest.com.br/"
            alt="Edifício Renascence"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.EmpreendimentoImg fluid={renascence} />
            Edifício Renascence
          </a>
        </S.EmpreendimentoWrapper>
        <S.EmpreendimentoWrapper>
          <a
            href="http://valorrealinvest.com.br/"
            alt="Residencial Esmeralda"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.EmpreendimentoImg fluid={esmeralda} />
            Residencial Esmeralda
          </a>
        </S.EmpreendimentoWrapper>
        <S.EmpreendimentoWrapper>
          <a
            href="http://valorrealinvest.com.br/"
            alt="La Bella Città"
            rel="noopener noreferrer"
            target="_blank"
          >
            <S.EmpreendimentoImg fluid={bellaCitta} />
            La Bella Città
          </a>
        </S.EmpreendimentoWrapper>
      </S.Container>
    </S.EmpreendimentosWrapper>
  )
}

export default Empreendimentos
