import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Modal from "../../components/Modal"

import * as S from "./styled"

const Plantas = () => {
  const data = useStaticQuery(
    graphql`
      query {
        first: file(relativePath: { eq: "63m.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        second: file(relativePath: { eq: "74m.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const firstImage = data.first.childImageSharp.fluid

  const secondImage = data.second.childImageSharp.fluid

  return (
    <S.PlantasWrapper id="plantas">
      <h2>Modelos e plantas</h2>

      <S.PlantaTabs>
        <S.PlantaTabList>
          <S.PlantaTab>63m²</S.PlantaTab>
          <S.PlantaTab>74m²</S.PlantaTab>
        </S.PlantaTabList>

        <S.PlantaTabPanel>
          <S.TextWrapper>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>ÁREA PRIVATIVA</td>
                  <td style={{ textAlign: "right" }}>63,38m2</td>
                </tr>
                <tr>
                  <td>ÁREA GARAGEM</td>
                  <td style={{ textAlign: "right" }}>66,52m2</td>
                </tr>
                <tr>
                  <td>ÁREA TOTAL</td>
                  <td style={{ textAlign: "right" }}>129,90m2</td>
                </tr>
                <tr>
                  <td>SUÍTE</td>
                  <td style={{ textAlign: "right" }}>SIM</td>
                </tr>
                <tr>
                  <td>QUARTOS</td>
                  <td style={{ textAlign: "right" }}>2</td>
                </tr>
                <tr>
                  <td>VARANDA</td>
                  <td style={{ textAlign: "right" }}>SIM</td>
                </tr>
                <tr>
                  <td>VAGA DE GARAGEM</td>
                  <td style={{ textAlign: "right" }}>SIM</td>
                </tr>
              </tbody>
            </table>
            <S.ButtonWrapper>
              <Modal ButtonText="Agende sua visita" />
            </S.ButtonWrapper>
          </S.TextWrapper>
          <S.Image fluid={firstImage} />
        </S.PlantaTabPanel>

        <S.PlantaTabPanel>
          <S.TextWrapper>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>ÁREA PRIVATIVA</td>
                  <td style={{ textAlign: "right" }}>74,1m2</td>
                </tr>
                <tr>
                  <td>ÁREA GARAGEM</td>
                  <td style={{ textAlign: "right" }}>67,47m2</td>
                </tr>
                <tr>
                  <td>ÁREA TOTAL</td>
                  <td style={{ textAlign: "right" }}>141,58m2</td>
                </tr>
                <tr>
                  <td>SUÍTE</td>
                  <td style={{ textAlign: "right" }}>SIM</td>
                </tr>
                <tr>
                  <td>QUARTOS</td>
                  <td style={{ textAlign: "right" }}>2</td>
                </tr>
                <tr>
                  <td>VARANDA</td>
                  <td style={{ textAlign: "right" }}>SIM</td>
                </tr>
                <tr>
                  <td>VAGA DE GARAGEM</td>
                  <td style={{ textAlign: "right" }}>SIM</td>
                </tr>
              </tbody>
            </table>
            <S.ButtonWrapper>
              <Modal ButtonText="Agende sua visita" />
            </S.ButtonWrapper>
          </S.TextWrapper>
          <S.Image fluid={secondImage} />
        </S.PlantaTabPanel>
      </S.PlantaTabs>
    </S.PlantasWrapper>
  )
}

export default Plantas
