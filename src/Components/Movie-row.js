import React, { useState } from 'react'
import { ContenerMovieRow, ImageMove, MoveRowLeft, MoveRowRight, Title } from '../Styles/Components/Movie-RowStyle'
import { UrlImg } from '../Constants/UrlImg'
import { useHistory } from 'react-router-dom'
import { goToWatchPage } from '../Routes/Path'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const MovieRow = ({ moveData, req }) => {
  const history = useHistory()

  const [scrowX, setScrowX] = useState(-400)

  const handleLeftMove = () => {
    let x = scrowX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }

    setScrowX(x)
  }
  const handleRightMove = () => {
    let x = scrowX - Math.round(window.innerWidth / 2)

    let widhtList = req.results?.length * 150

    if (window.innerWidth - widhtList > x) {
      x = window.innerWidth - widhtList
    }

    setScrowX(x)
  }

  const goToWatch = (history, param1, param2) => {
    goToWatchPage(history, param1, param2)
  }

  const MovieRowList = req?.results?.map((Move) => {
    return (
      <>
        <MoveRowLeft onClick={handleLeftMove}>
          <ArrowBackIosIcon style={{ fontSize: 50 }} />
        </MoveRowLeft>

        <ImageMove
          onClick={() => goToWatch(history, Move.id, Move.media_type)}
          src={`${UrlImg}${Move.poster_path}`}
          alt={Move.title}
        />

        <MoveRowRight onClick={handleRightMove}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </MoveRowRight>
      </>
    )
  })

  return (
    <div>
      <Title>{moveData?.title}</Title>

      <ContenerMovieRow
        style={{
          width: req.results?.length * 150,
          marginLeft: scrowX,
        }}
      >
        {MovieRowList}
      </ContenerMovieRow>
    </div>
  )
}

export default MovieRow
