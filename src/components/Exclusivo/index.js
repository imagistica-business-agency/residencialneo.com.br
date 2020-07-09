import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Exclusivo = () => {
  const { exclusivo } = useStaticQuery(
    graphql`
      query {
        exclusivo: file(relativePath: { eq: "exclusivo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const image = exclusivo.childImageSharp.fluid

  return (
    <S.ExperienceWrapper id="exclusivo">
      <S.Image fluid={image} />
      <S.TextWrapper>
        <h2>
          <span className="small">Exclusivo,</span>
          <br />
          seguro, anti-inflação
        </h2>

        <p>Investimento IMUNE à quebra de bancos;</p>

        <p>NÃO PODE ser congelado pelo governo;</p>

        <p>
          PROTEÇÃO direta para o PODER DE COMPRA do seu dinheiro, para
          investimentos de incorporação imobiliária ou aluguéis de imóveis.
        </p>

        <h2>
          <span className="small">Especialização</span>
          <br />
          transparência
        </h2>

        <p>
          Empresa com ampla especialidade em empreendimentos imobiliários a
          preço de custo (Lei 4.591/64);
        </p>

        <p>
          Acesso direto a todas as informações referentes ao empreendimento para
          os associados, donos do negócio.
        </p>

        <S.Button>Verificar disponibilidade</S.Button>
      </S.TextWrapper>
    </S.ExperienceWrapper>
  )
}

export default Exclusivo
