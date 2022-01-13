import React from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { goToWatchPage } from '../../Routes/Path'
import { useHistory } from 'react-router-dom'
import {
  BodyBanner,
  ButtonEp,
  ButtonWacth,
  ContenerButton,
  DivInfo,
  Gradiente,
  GradienteLeft,
  InfoContainer,
  Overview,
} from '../../Styles/Components/Headers/BannerMoveStyle'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const BannerMove = ({ dataFeature }) => {
  const firstDate = new Date(dataFeature.release_date)
  const history = useHistory()
  const isActive = useMediaQuery('(max-width: 450px)')

  return (
    <BodyBanner
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${dataFeature.backdrop_path})`,
      }}
    >
      {isActive ? (
        <InfoContainer>
          <div id="ContainerDataFeature">
            <h1>{dataFeature.title}</h1>

            <DivInfo>
              <p>{dataFeature.vote_average} pontos</p>
              <p style={{ color: 'white' }}>{firstDate.getFullYear()}</p>
            </DivInfo>

            {isActive ? (
              <div></div>
            ) : (
              <Overview>
                <p>{dataFeature.overview}</p>
              </Overview>
            )}

            <ContenerButton>
              <ButtonWacth onClick={() => goToWatchPage(history, dataFeature.id, 'movie')}>
                <PlayArrowIcon />
                <p>Assitir</p>
              </ButtonWacth>
              <ButtonEp>
                <InfoOutlinedIcon /> <p style={{ marginLeft: '5px' }}>Mais Informações</p>
              </ButtonEp>
            </ContenerButton>
          </div>
        </InfoContainer>
      ) : (
        <Gradiente>
          <GradienteLeft>
            <InfoContainer>
              <div id="ContainerDataFeature">
                <h1>{dataFeature.title}</h1>

                <DivInfo>
                  <p>{dataFeature.vote_average} pontos</p>
                  <p style={{ color: 'white' }}>{firstDate.getFullYear()}</p>
                </DivInfo>

                {isActive ? (
                  <div></div>
                ) : (
                  <Overview>
                    <p>{dataFeature.overview}</p>
                  </Overview>
                )}

                <ContenerButton>
                  <ButtonWacth onClick={() => goToWatchPage(history, dataFeature.id, 'movie')}>
                    <PlayArrowIcon />
                    <p>Assitir</p>
                  </ButtonWacth>
                  <ButtonEp>
                    <InfoOutlinedIcon /> <p style={{ marginLeft: '5px' }}>Mais Informações</p>
                  </ButtonEp>
                </ContenerButton>
              </div>
            </InfoContainer>
          </GradienteLeft>
        </Gradiente>
      )}
    </BodyBanner>
  )
}

export default BannerMove
