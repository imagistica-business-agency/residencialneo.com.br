import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Associados = () => {
  const { bannerAssociados } = useStaticQuery(
    graphql`
      query {
        bannerAssociados: file(relativePath: { eq: "bannerAssociados.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const image = bannerAssociados.childImageSharp.fluid

  return (
    <S.AssociadosWrapper>
      <S.Image fluid={image}>
        <S.Title>
          Já somos
          <br />
          <S.Big>305 associados</S.Big>
          <br />
          <S.Button>Seja associado</S.Button>
        </S.Title>
      </S.Image>
    </S.AssociadosWrapper>
  )
}

export default Associados
