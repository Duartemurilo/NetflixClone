import styled from 'styled-components'
import breakPoints from '../../../Constants/breakPoints'

export const BodyBanner = styled.div`
  background-size: cover;
  background-position: center;
  height: 100vh;

  ${`@media only screen and ${breakPoints.device.cel}{
    height: 70vh;
   
}`}
`

export const ContainerHeaderMove = styled.div`
  height: 100vh;
`

export const Gradiente = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, black 8%, transparent 92%);
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
  width: 40%;
  height: 60%;

  h1 {
    font-size: 50px;
    margin-top: 300px;
  }
  ${`@media only screen and ${breakPoints.device.cel}{
      width: 100%;
      height: 90%;
      padding-left: 0px;
     
      h1 {
        font-size: 35px;
        margin-bottom: 0px;
        margin-left:0px;
      

      }
      #ContainerDataFeature{
        display:flex;
        flex-direction:column;
        margin-top: 30px;
        justify-content: flex-end;
        height: 120%;
        padding-left: 15px;
        gap:5px;
      }
  }`}
`

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 6vh;
  font-size: 15px;
  color: green;
  margin-right: 30%;
  align-items: center;
  width: 40%;

  ${`@media only screen and ${breakPoints.device.cel}{
   
    width: 50%;
    justify-content: flex-start;
    gap:20px;
    margin-top:10px;
    p{
      font-size: 20px;
      margin-top:0;
      margin-bottom: 0px;
    }
}`}
`
export const Overview = styled.div`
  margin-top: 15px;

  font-size: 20px;
  width: 90%;

  ${`@media only screen and ${breakPoints.device.cel}{

    width: 90%;
    margin-top: 0px;
    font-size: 15px;
    height: 40vh;
}`}
`

export const ContenerButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;

  ${`@media only screen and ${breakPoints.device.cel}{
    
    margin-top: 0vh;
    width: 350px;
    gap:30px;
    }
}`}
`

export const ButtonWacth = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 6vh;
  width: 30vw;
  border: 0.8px solid black;
  border-radius: 8px;
  align-items: center;
  background-color: white;
  color: black;
  cursor: pointer;
  gap: 0.5vw;
  ${`@media only screen and ${breakPoints.device.cel}{
      width: 40vw;;
      font-size: 15px;
    }
}`}
`
export const ButtonEp = styled.button`
  display: flex;
  font-size: 18px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: #6d6d6eb3;
  height: 6vh;
  margin-left: 2vw;
  width: 50%;
  border-radius: 8px;
  align-items: center;
  color: white;
  border: 2px solid white;
  ${`@media only screen and ${breakPoints.device.cel}{
      width: 60vw;;
      font-size: 15px;
    }
}`}
`
