import styled from "styled-components"

export const NavWrapper = styled.nav`
  position: fixed;
  height: 80px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`

export const NavMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 2fr;
  gap: 30px;
  padding: 20px 30px;
  max-width: 1640px;
  margin: 0 auto;
`

export const Logo = styled.img`
  height: 40px;
`
