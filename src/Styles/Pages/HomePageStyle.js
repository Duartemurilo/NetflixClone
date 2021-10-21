import styled from 'styled-components'
import breakPoints from '../../Constants/breakPoints'

export const HomePageContainer = styled.div`
  display: flex;
  margin: 0;
  max-width: 100%;
  flex-direction: column;
  background-color: black;
  color: white;
  height: auto;
  overflow-x: hidden;
`

export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 80%;
`

export const Footer = styled.div`
  height: 20vh;
  text-align: center;
  margin-top: 10vh;
  ${`@media only screen and ${breakPoints.device.cel}{
  width: 100%;
   
}`}
`
