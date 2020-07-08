import React from "react"

import * as S from "./styled"
import logo from "../../images/logo.svg"

const Nav = () => (
  <S.NavWrapper>
    <S.NavMain>
      <S.Logo src={logo} alt="" />
    </S.NavMain>
  </S.NavWrapper>
)

export default Nav
