import React from "react"

import * as S from "./styled"

const Plantas = () => (
  <S.PlantasWrapper>
    <S.TextWrapper>
      <h2>Modelos e plantas</h2>

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
    </S.TextWrapper>
    <S.Image />
  </S.PlantasWrapper>
)

export default Plantas
