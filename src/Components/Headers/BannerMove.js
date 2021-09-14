import React from 'react'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import { goToWatchPage } from '../../Routes/Path'
import { useHistory } from 'react-router-dom'
import {
  BottonEp,
  BottonWacth,
  ContainerHeaderMove,
  ContenerBotton,
  DivInfo,
  Gradiente,
  GradienteLeft,
  InfoContainer,
  InfoText,
  Overview,
  TitleMove,
} from '../../Styles/Components/Headers/BannerMove'

const BannerMove = ({ dataFeature }) => {
  console.log(dataFeature)
  const firstDate = new Date(dataFeature.release_date)
  const history = useHistory()

  return (
    <ContainerHeaderMove
      style={{
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${dataFeature.backdrop_path})`,
      }}
    >
      <Gradiente>
        <GradienteLeft>
          <InfoContainer>
            <TitleMove>
              <h1>{dataFeature.title}</h1>
            </TitleMove>
            <DivInfo>
              <p>{dataFeature.vote_average} pontos</p>
              <p style={{ color: 'white' }}>{firstDate.getFullYear()}</p>
            </DivInfo>

            <Overview>
              <p>{dataFeature.overview}</p>
            </Overview>

            <ContenerBotton>
              <BottonWacth onClick={() => goToWatchPage(history, dataFeature.id, 'movie')}>
                <PlayArrowIcon />
                <p>Assitir ao episodio</p>
              </BottonWacth>
              <BottonEp>
                <InfoOutlinedIcon /> <InfoText>Mais Informações</InfoText>
              </BottonEp>
            </ContenerBotton>
          </InfoContainer>
        </GradienteLeft>
      </Gradiente>
    </ContainerHeaderMove>
  )
}

export default BannerMove
