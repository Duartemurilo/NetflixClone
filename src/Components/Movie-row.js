import React, { useState } from 'react'
import { ContenerMovieRow, ImageMove, MoveRowLeft, MoveRowRight, Title } from '../Styles/Components/Movie-RowStyle'
import { UrlImg } from '../Constants/UrlImg'
import NavigateBeforeSharpIcon from '@material-ui/icons/NavigateBeforeSharp'
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp'
import { useHistory } from 'react-router-dom'
import { goToWatchPage } from '../Routes/Path'

const MovieRow = (props) => {
  const history = useHistory()

  const [scrowX, setScrowX] = useState(-400)

  const req = props.req

  const handleLeftMove = () => {
    let x = scrowX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }

    setScrowX(x)
  }
  const handleRightMove = () => {
    let x = scrowX - Math.round(window.innerWidth / 2)

    let listW = req.results?.length * 150

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW
    }

    setScrowX(x)
  }

  const goToWatch = (history, param1, param2) => {
    goToWatchPage(history, param1, param2)
  }

  const MovieRowList = req?.results?.map((Move) => {
    return (
      <div>
        <MoveRowLeft onClick={handleLeftMove}>
          <NavigateBeforeSharpIcon style={{ fontSize: 50 }} />
        </MoveRowLeft>

        <MoveRowRight onClick={handleRightMove}>
          <NavigateNextSharpIcon style={{ fontSize: 50 }} />
        </MoveRowRight>

        <ImageMove
          onClick={() => goToWatch(history, Move.id, Move.media_type)}
          src={`${UrlImg}${Move.poster_path}`}
          alt={Move.title}
        />
      </div>
    )
  })

  return (
    <div>
      <Title>{props.title}</Title>

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
