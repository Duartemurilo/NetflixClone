import styled from 'styled-components'

export const ContenerWacthPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: black;
  color: white;
  height: 100vh;
  img {
    height: 5vh;
    margin-top: 5vh;
    margin-left: 2vw;
    margin-bottom: 0%;
    width: 3vw;
  }
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
  padding: 50px;
  width: 50%;
  height: 70vh;
  h1 {
    font-family: Zapf-Chancery;
    font-size: 45px;
    font-weight: bold;
  }
`

export const HeaderInfoContainer = styled.div`
  display: flex;
  height: 15vh;
  align-items: center;
  p {
    margin-left: 15px;
    margin-top: 6vh;
  }
`
export const TitleMove = styled.div`
  display: flex;
  font-family: Zapf-Chancery;
  width: 70vw;
  font-size: 4vw;
  margin-left: 25vw;
  margin-top: 2vh;
`

export const DivInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 6vh;
  font-size: 15px;
  color: white;
  margin-top: 2vh;
  margin-right: 280px;
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
`

export const Overview = styled.div`
  margin-top: 15px;
  height: auto;
  font-size: 20px;
  width: 90%;
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

  margin-top: 28vh;
  background-color: #403f3e;
  position: absolute;
  height: auto;
  font-size: 20px;
  border-radius: 10px;
  width: 30vw;
  cursor: pointer;
  transition: all ease 1s;
`

export const DivIndiomas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  width: 50%;
  height: 100%;
  color: #acadac;
`
export const DivLegendas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  width: 50%;
  height: 100%;
  color: #acadac;
`
export const TxtLanguage = styled.p`
  :hover {
    color: white;
    font-size: 22px;
  }
`
