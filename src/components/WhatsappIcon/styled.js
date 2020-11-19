import styled from 'styled-components'

export const WhatsappWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  footer {
   
    position: relative;
    z-index: 10 !important;
}
.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#25d366;
	color:#FFF;
	border-radius:50px;
	text-align:center;
  font-size:30px;
	box-shadow: 2px 2px 3px #999;
  z-index:999 !important;
}

.my-float{
	margin-top:16px;
}

.bounce {
    animation: bounce 1s infinite;
  
}

@keyframes bounce {
    0%,
    25%,
    50%,
    75%,
    100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(-10px);
    }
    60% {
        transform: translateX(-15px);
    }
}
`
