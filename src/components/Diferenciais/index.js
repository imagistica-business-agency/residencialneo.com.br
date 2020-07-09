import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Diferenciais = () => {
  const { diferenciais } = useStaticQuery(
    graphql`
      query {
        diferenciais: file(relativePath: { eq: "diferenciais.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const image = diferenciais.childImageSharp.fluid

  return (
    <S.DiferenciaisWrapper id="diferenciais">
      <S.TextWrapper>
        <h2>
          <span className="small">Diferenciais e vantagens</span>
          <br />
          VR Investimentos
        </h2>

        <p>
          O Sistema VR Investimentos é próprio (concebido pela própria VR),
          único (só existe esse no mercado brasileiro) e exclusivo (só a VR
          tem), sistematizado e aperfeiçoado continuamente.
        </p>

        <p>
          Possuímos know-how técnico, financeiro, jurídico e administrativo de
          mais de uma década.
        </p>
      </S.TextWrapper>
      <S.Image fluid={image} />
    </S.DiferenciaisWrapper>
  )
}

export default Diferenciais
