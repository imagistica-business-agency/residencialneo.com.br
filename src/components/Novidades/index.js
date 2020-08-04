import React from 'react'

import NovidadesList from '../NovidadesList'

import * as S from './styled'

const Novidades = () => (
  <S.NovidadesWrapper id="novidades">
    <h2>Últimas novidades</h2>
    <NovidadesList />
  </S.NovidadesWrapper>
)

export default Novidades
