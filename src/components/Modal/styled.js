import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    text-align: left;

    .modal-main {
      position: fixed;
      background: white;
      width: 50%;
      height: auto;
      padding: 40px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${media.lessThan('768px')`
        width: 100%;
      `}
    }
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
`

export const Button = styled.button`
  background: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 14px;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: black;
    color: white;
  }

  &.white {
    color: white;
    border-color: white;

    &:hover {
      background: white;
      color: black;
    }
  }
`

export const CloseButton = styled.img`
  width: 15px;
  margin-bottom: 20px;
  cursor: pointer;
`
