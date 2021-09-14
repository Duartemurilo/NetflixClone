import styled from 'styled-components'

export const ContenerPerfilPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  height: 100vh;
  color: white;
`
export const TextoPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  color: white;
  margin-bottom: 7vh;
  width: 45%;
  height: 8vh;
`

export const ConteneirPerfis = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  height: 18vh;
`
export const ImgPerfis = styled.img`
  object-fit: cover;
  width: 5vw;
  height: 3vh;
  width: 10vw;
  height: 18vh;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    border: 2px solid white;
  }
`

export const ButtonPerfis = styled.button`
  width: 20vw;
  height: 5vh;
  margin-top: 18vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  font-size: 1.5vw;
  border: 1px solid #808080;
  color: #808080;
  cursor: pointer;
  :hover {
    color: white;
    border: 1px solid white;
    transform: scale(1.1);
  }
`
