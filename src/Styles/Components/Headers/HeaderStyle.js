import styled from 'styled-components'
import BreakPoints from '../../../Constants/breakPoints'

export const ContainerHeaderNetflix = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  color: white;
  width: 100%;
  height: 100px;
  background-color: transparent;
  transition: all ease 0.7s;
  ${`@media only screen and ${BreakPoints.device.cel}{

    height: 80px;
  }`}
`
export const Logo = styled.img`
  object-fit: cover;
  width: 160px;
  margin-top: 2vh;
  margin-left: 2vw;
  height: 80px;
  :hover {
    transform: scale(1.1);
  }
  ${`@media only screen and ${BreakPoints.device.cel}{
    opacity:0;
  }`}
`
export const Perfil = styled.img`
  height: 70%;
  margin-right: 5vw;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    border: 2px solid white;
  }
`
