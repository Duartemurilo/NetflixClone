import styled from 'styled-components'

export const ImageMove = styled.img`
  min-width: 150px;
  object-fit: cover;
  margin-left: 7px;
  height: 200px;
  overflow-x: hidden;
  cursor: pointer;
  transform: scale(0.94);
  transition: all ease 0.2s;
  :hover {
    transform: scale(1);
  }
`
export const ContenerMovieRow = styled.div`
  display: flex;
  transition: all ease 0.5s;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 5vh;
  margin-left: 20px;
`

export const MoveRowLeft = styled.div`
  position: absolute;
  width: 40px;
  display: flex;

  align-items: center;
  height: 200px;
  cursor: pointer;
  left: 0%;
`
export const MoveRowRight = styled.div`
  position: absolute;
  width: 40px;
  display: flex;

  align-items: center;
  height: 200px;
  cursor: pointer;
  right: 0%;
`
