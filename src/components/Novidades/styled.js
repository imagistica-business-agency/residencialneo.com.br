import styled from "styled-components"
import media from "styled-media-query"

export const NovidadesWrapper = styled.section`
  padding: 100px 30px;
  max-width: 1640px;
  margin: 0 auto;
  font-size: 16px;

  ${media.lessThan("640px")`
    padding: 80px 20px;
  `}
`
