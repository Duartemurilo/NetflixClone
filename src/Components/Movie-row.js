import React, { useState } from 'react'
import {
  BodyMovieRow,
  ContenerMovieRow,
  ImageMove,
  MoveRowLeft,
  MoveRowRight,
  Title,
} from '../Styles/Components/Movie-RowStyle'
import { UrlImg } from '../Constants/UrlImg'
import { useHistory } from 'react-router-dom'
import { goToWatchPage } from '../Routes/Path'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const MovieRow = ({ req, title, move }) => {
  const history = useHistory()
  const isActive = useMediaQuery('(max-width: 450px)')

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

    let widthList = req.results?.length * 150

    if (window.innerWidth - widthList > x) {
      x = window.innerWidth - widthList
    }

    setScrowX(x)
  }

  const goToWatch = (history, param1, param2) => {
    goToWatchPage(history, param1, param2)
  }

  const MovieRowList = req?.results?.map((Move) => {
    return (
      <>
        {move.slug === 'Originais' ? (
          <MoveRowLeft style={{ height: '300px' }} onClick={handleLeftMove}>
            {isActive ? (
              <ArrowBackIosIcon id="arrowLeft" style={{ fontSize: 30 }} />
            ) : (
              <ArrowBackIosIcon style={{ fontSize: 35 }} />
            )}
          </MoveRowLeft>
        ) : (
          <MoveRowLeft onClick={handleLeftMove}>
            {isActive ? (
              <ArrowBackIosIcon style={{ fontSize: 30, marginRight: '10px' }} />
            ) : (
              <ArrowBackIosIcon style={{ fontSize: 35 }} />
            )}
          </MoveRowLeft>
        )}

        {move.slug === 'Originais' ? (
          <ImageMove
            style={{ height: '35vh', width: '200px' }}
            onClick={() => goToWatch(history, Move.id, Move.media_type)}
            src={`${UrlImg}${Move.poster_path}`}
            alt={Move.title}
          />
        ) : (
          <ImageMove
            onClick={() => goToWatch(history, Move.id, Move.media_type)}
            src={`${UrlImg}${Move.poster_path}`}
            alt={Move.title}
          />
        )}
        {move.slug === 'Originais' ? (
          <MoveRowRight style={{ height: '300px' }} onClick={handleRightMove}>
            {isActive ? <NavigateNextIcon style={{ fontSize: 50 }} /> : <NavigateNextIcon style={{ fontSize: 60 }} />}
          </MoveRowRight>
        ) : (
          <MoveRowRight onClick={handleRightMove}>
            {isActive ? <NavigateNextIcon style={{ fontSize: 50 }} /> : <NavigateNextIcon style={{ fontSize: 60 }} />}
          </MoveRowRight>
        )}
      </>
    )
  })

  return (
    <BodyMovieRow>
      <Title>{title}</Title>

      <ContenerMovieRow
        style={{
          width: req.results?.length * 150,
          marginLeft: scrowX,
        }}
      >
        {MovieRowList}
      </ContenerMovieRow>
    </BodyMovieRow>
  )
}

export default MovieRow
