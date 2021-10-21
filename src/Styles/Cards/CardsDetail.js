import styled from 'styled-components'
import breakPoints from '../../Constants/breakPoints'

export const ContenerWacthPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: white;
  height: 100vh;
  img {
    height: 5vh;
    margin-top: 5vh;
    margin-left: 2vw;
    margin-bottom: 0%;
    width: 3vw;
  }

  ${`@media only screen and ${breakPoints.device.cel}{
  height: 50vh; 
  width: 98%;
  }`}
`
export const HeaderInfoContainer = styled.div`
  display: flex;
  height: 10vh;
  align-items: center;

  p {
    margin-left: 15px;
    margin-top: 6vh;
  }
  ${`@media only screen and ${breakPoints.device.cel}{
   
   height: 10vh;
   img{
     width:50px;
     object-fit: cover;
   }
   p {
    margin-left: 0px;
    margin-top: 6vh;
  }
  }
  }`}
`

export const Gradiente = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, black 8%, transparent 92%);
  ${`@media only screen and ${breakPoints.device.cel}{
   width: 100%;
  
  }`}
`
export const GradienteLeft = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, black 20%, transparent 80%);
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  width: 50%;
  height: 50vh;
  gap: 10px;
  h1 {
    font-size: 45px;
    font-weight: bold;
  }
  h2 {
    font-size: 13px;
    font-weight: bold;
  }

  ${`@media only screen and ${breakPoints.device.cel}{

   width: 100%;
   padding: 0px;
   padding-left: 20px;
 
   h1 {

    font-size: 30px;
    font-weight: bold;
    margin-top:30vh;
    width:90%;
  }
  h2{

    font-size: 13px;
    font-weight: bold;
  }
  }`}
`

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 6vh;
  font-size: 15px;
  color: white;
  align-items: center;

  div {
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6px;
    color: white;
    width: 2vw;
    height: 2vh;
    border: 1px solid white;
  }
  h1 {
    font-size: 15px;
  }
  width: 50%;
  ${`@media only screen and ${breakPoints.device.cel}{
 
  width: 70%;
    div{
      display:flex;
      width: 7vw;
    }
}`}
`

export const Overview = styled.div`
  margin-top: -8px;
  height: auto;
  font-size: 20px;
  width: 90%;

  ${`@media only screen and ${breakPoints.device.cel}{
     
     margin-top: 0px;
     display: flex;
     height: 100%;
     max-height: 90%;
     font-size: 15px;
  }`}
`
export const ConteneirButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 60vh;
  font-size: 20px;
  width: 60%;
`

export const Button = styled.div`
  display: flex;
  p {
    margin-left: 1vw;
  }
  align-items: center;
  margin-top: 1vh;
  height: 5vh;
  font-size: 20px;
  width: 100%;
  cursor: pointer;
  :hover {
    border: 3px solid white;
    border-radius: 7px;
  }
`
export const DivLanguage = styled.div`
  display: flex;
  margin-left: 40vw;
  background-color: #403f3e;
  position: absolute;
  height: auto;
  font-size: 20px;
  border-radius: 10px;
  width: 30vw;
  transition: all ease 1s;
  background-color: rgba(0, 3, 0, 0.7);
  p {
    :hover {
      color: white;
      cursor: pointer;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    border-left: 1px solid white;
    width: 50%;
    height: 100%;
    color: #acadac;
    opacity: 1;
  }
`
export const FullInfoContainer = styled.div``
