import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Experience = () => {
  const { experience } = useStaticQuery(
    graphql`
      query {
        experience: file(relativePath: { eq: "experience.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const image = experience.childImageSharp.fluid

  return (
    <S.ExperienceWrapper id="experience">
      <S.TextWrapper>
        <h2>
          <span className="small">Experience</span>
          <br />
          Essa nova realidade
        </h2>

        <p>
          <S.DotIcon />
          Uma suíte e um quarto
        </p>

        <p>
          <S.DotIcon />
          Sacadas com churrasqueira
        </p>

        <p>
          <S.DotIcon />
          Arquitetura moderna
        </p>

        <p>
          <S.DotIcon />
          Projeto eficiente, prevendo baixo valor de condomínio
        </p>

        <p>
          <S.DotIcon />
          Salão gourmet na cobertura
        </p>

        <p>
          <S.DotIcon />
          Com vista para a cidade
        </p>

        <p>
          <S.DotIcon />
          Piscina no topo do prédio
        </p>

        <p>
          <S.DotIcon />
          Espaço fitness
        </p>

        <p>
          <S.DotIcon />
          Terraço coberto
        </p>

        <p>
          <S.DotIcon />
          Entrada moderna com porte-cochère
        </p>
      </S.TextWrapper>
      <S.Image fluid={image} />
    </S.ExperienceWrapper>
  )
}

export default Experience
