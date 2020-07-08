import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const IndexPage = () => {
  const { banner } = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const image = banner.childImageSharp.fluid

  return <S.HeaderWrapper fluid={image} />
}

export default IndexPage
