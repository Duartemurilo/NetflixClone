import React from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { goToWatchPage } from '../../Routes/Path'
import { useHistory } from 'react-router-dom'
import {
  ButtonEp,
  ButtonWacth,
  ContenerButton,
  DivInfo,
  Gradiente,
  GradienteLeft,
  InfoContainer,
  Overview,
} from '../../Styles/Components/Headers/BannerMoveStyle'

const BannerMove = ({ dataFeature }) => {
  const firstDate = new Date(dataFeature.release_date)
  const history = useHistory()

  return (
    <div
      style={{
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${dataFeature.backdrop_path})`,
        height: '100vh',
      }}
    >
      <Gradiente>
        <GradienteLeft>
          <InfoContainer>
            <h1>{dataFeature.title}</h1>

            <DivInfo>
              <p>{dataFeature.vote_average} pontos</p>
              <p style={{ color: 'white' }}>{firstDate.getFullYear()}</p>
            </DivInfo>

            <Overview>
              <p>{dataFeature.overview}</p>
            </Overview>

            <ContenerButton>
              <ButtonWacth onClick={() => goToWatchPage(history, dataFeature.id, 'movie')}>
                <PlayArrowIcon />
                <p>Assitir ao episodio</p>
              </ButtonWacth>
              <ButtonEp>
                <InfoOutlinedIcon /> <p style={{ marginLeft: '5px' }}>Mais Informações</p>
              </ButtonEp>
            </ContenerButton>
          </InfoContainer>
        </GradienteLeft>
      </Gradiente>
    </div>
  )
}

export default BannerMove
