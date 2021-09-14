import styled from 'styled-components'

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
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
`
export const TitleMove = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
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
`
export const Overview = styled.div`
  margin-top: 15px;
  height: 14vh;
  font-size: 20px;
  width: 90%;
`

export const ContenerBotton = styled.div`
  display: flex;
  margin-top: 5vh;
  align-items: center;
  width: 100%;
  height: 10vh;
  margin-top: 20vh;
  margin-left: 4vw;
`

export const BottonWacth = styled.button`
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
`
export const BottonEp = styled.button`
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
`

export const InfoText = styled.p`
  margin-left: 5px;
`
