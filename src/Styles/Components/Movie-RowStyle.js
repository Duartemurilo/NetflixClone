import styled from 'styled-components'
import breakPoints from '../../Constants/breakPoints'

export const BodyMovieRow = styled.div`
  margin-top: 1vh;
  :hover {
    div {
      opacity: 1;
    }
  }
`

export const ContenerMovieRow = styled.div`
  display: flex;
  text-align: center;
  :hover {
    div {
      opacity: 1;
    }
  }
`

export const MoveRowLeft = styled.div`
  position: absolute;
  width: 40px;
  display: flex;
  align-items: center;
  height: 120px;
  cursor: pointer;
  left: 0%;
  padding-left: 10px;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.1);
  ${`@media only screen and ${breakPoints.device.cel}{
   height: 120px;
   overflow-x: hidden;
}`}
`
export const MoveRowRight = styled.div`
  position: absolute;
  width: 40px;
  display: flex;
  align-items: center;
  height: 120px;
  cursor: pointer;
  right: 0%;
  opacity: 0;
  width: 55px;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.1);
  ${`@media only screen and ${breakPoints.device.cel}{
    right: 0%;
    height: 120px;
    overflow-x: hidden;
  }`}
`

export const ImageMove = styled.img`
  width: 150px;
  object-fit: cover;
  height: 120px;

  cursor: pointer;
  transform: scale(0.94);
  transition: all ease 0.2s;

  :hover {
    transform: scale(1);
  }
  ${`@media only screen and ${breakPoints.device.cel}{
   width: 300px;
   height: 120px;
}`}
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 5vh;
  margin-left: 20px;
  opacity: 0;
`
