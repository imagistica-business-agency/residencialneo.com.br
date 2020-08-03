import styled from "styled-components"
import media from "styled-media-query"

export const DownloadsWrapper = styled.main`
  padding: 100px 30px;
  max-width: 1340px;
  margin: 0 auto;
  font-size: 16px;

  ul {
    margin: 3rem 0 4rem 0;
    list-style: none;
  }

  li {
    padding: 1em;

    :nth-child(odd) {
      background-color: #e3e3e3;
    }

    a {
      color: black;
      text-decoration: none;

      :hover {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }

  ${media.lessThan("640px")`
    padding: 80px 20px;
  `}
`
