import styled from 'styled-components'

export const WhatsappWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  img {
    width: 40px;
  }
  
  .bounce {
      animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
      0%,
      25%,
      50%,
      75%,
      100% {
          transform: translateY(0);
      }
      40% {
          transform: translateY(-20px);
      }
      60% {
          transform: translateY(-12px);
      }
  }
`

