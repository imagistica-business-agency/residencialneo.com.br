import React from "react"

import * as S from "./styled"

const Novidades = () => (
  <S.NovidadesWrapper id="novidades">
    <h2>Últimas novidades</h2>

    <S.BlogList>
      <S.BlogItem>
        <S.BlogItemLink to="#">
          <S.BlogItemImage></S.BlogItemImage>
        </S.BlogItemLink>
        <S.BlogItemLink to="#">
          <S.BlogItemTitle>Lorem ipsum dolor sit amet</S.BlogItemTitle>
        </S.BlogItemLink>
        <S.BlogItemDescription>
          Duis in eleifend ipsum. Curabitur bibendum justo in felis gravida, sed
          consectetur dolor suscipit. Etiam in elementum mauris, nec porttitor
          libero.
        </S.BlogItemDescription>
        <S.BlogItemLink to="#">
          Saiba mais <S.ArrowIcon />
        </S.BlogItemLink>
      </S.BlogItem>
      <S.BlogItem>
        <S.BlogItemLink to="#">
          <S.BlogItemImage></S.BlogItemImage>
        </S.BlogItemLink>
        <S.BlogItemLink to="#">
          <S.BlogItemTitle>Lorem ipsum dolor sit amet</S.BlogItemTitle>
        </S.BlogItemLink>
        <S.BlogItemDescription>
          Duis in eleifend ipsum. Curabitur bibendum justo in felis gravida, sed
          consectetur dolor suscipit. Etiam in elementum mauris, nec porttitor
          libero.
        </S.BlogItemDescription>
        <S.BlogItemLink to="#">
          Saiba mais <S.ArrowIcon />
        </S.BlogItemLink>
      </S.BlogItem>
      <S.BlogItem>
        <S.BlogItemLink to="#">
          <S.BlogItemImage></S.BlogItemImage>
        </S.BlogItemLink>
        <S.BlogItemLink to="#">
          <S.BlogItemTitle>Lorem ipsum dolor sit amet</S.BlogItemTitle>
        </S.BlogItemLink>
        <S.BlogItemDescription>
          Duis in eleifend ipsum. Curabitur bibendum justo in felis gravida, sed
          consectetur dolor suscipit. Etiam in elementum mauris, nec porttitor
          libero.
        </S.BlogItemDescription>
        <S.BlogItemLink to="#">
          Saiba mais <S.ArrowIcon />
        </S.BlogItemLink>
      </S.BlogItem>
      <S.BlogItem>
        <S.BlogItemLink to="#">
          <S.BlogItemImage></S.BlogItemImage>
        </S.BlogItemLink>
        <S.BlogItemLink to="#">
          <S.BlogItemTitle>Lorem ipsum dolor sit amet</S.BlogItemTitle>
        </S.BlogItemLink>
        <S.BlogItemDescription>
          Duis in eleifend ipsum. Curabitur bibendum justo in felis gravida, sed
          consectetur dolor suscipit. Etiam in elementum mauris, nec porttitor
          libero.
        </S.BlogItemDescription>
        <S.BlogItemLink to="#">
          Saiba mais <S.ArrowIcon />
        </S.BlogItemLink>
      </S.BlogItem>
    </S.BlogList>
  </S.NovidadesWrapper>
)

export default Novidades
