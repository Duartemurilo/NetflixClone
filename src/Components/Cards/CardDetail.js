import React, { useState } from 'react'
import {
  Button,
  ConteneirButtons,
  ContenerWacthPage,
  DivIndiomas,
  DivInfo,
  DivLanguage,
  DivLegendas,
  Gradiente,
  GradienteLeft,
  HeaderInfoContainer,
  InfoContainer,
  Overview,
  TxtLanguage,
} from '../../Styles/Cards/CardsDetail'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import VideoLibrarySharp from '@material-ui/icons/VideoLibrarySharp'
import SubtitlesIcon from '@material-ui/icons/Subtitles'

const CardDetailTv = ({ data, type }) => {
  const [currentOpacity, setCurrentOpacity] = useState(false)

  const handleLanguage = () => {
    setCurrentOpacity(true)
  }
  const handlePortugues = () => {
    setCurrentOpacity(false)
  }
  const firstDateMovie = new Date(data.release_date)
  const tempoMinutos = data.runtime

  const duracaoHora = tempoMinutos / 60

  const fuulTime = duracaoHora.toFixed(2)

  const firstDateTv = new Date(data.last_air_date)

  return (
    <>
      {type === 'tvdata' ? (
        <ContenerWacthPage
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        >
          <Gradiente>
            <GradienteLeft>
              <InfoContainer>
                <HeaderInfoContainer>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png"
                    alt="Logo Netflix"
                  />
                  <p>series</p>
                </HeaderInfoContainer>

                <h1>{data.name}</h1>
                <DivInfo>
                  <p style={{ color: 'green' }}>{data.vote_average} pontos</p>
                  <p>{firstDateTv.getFullYear()}</p>
                  <p>{data.number_of_seasons} Temporadas</p>
                  <div>
                    <h1>HD</h1>
                  </div>
                </DivInfo>
                <Overview>
                  <p>{data.overview}</p>
                </Overview>
                <ConteneirButtons>
                  <Button>
                    <ThumbUpAltIcon />
                    <p style={{ marginLeft: '1vh' }}>Classificar este Titulo</p>
                  </Button>
                  <Button>
                    <PlayArrowIcon />
                    <p style={{ marginLeft: '1vh' }}>Temporada 1 ep 1</p>
                  </Button>
                  <Button>
                    <VideoLibrarySharp />
                    <p style={{ marginLeft: '1vh' }}>Episodiose mais </p>
                  </Button>
                  <Button onClick={handleLanguage}>
                    <SubtitlesIcon />
                    <p style={{ marginLeft: '1vh' }}>Indioma e legendas </p>
                  </Button>
                </ConteneirButtons>
                {currentOpacity && (
                  <DivLanguage>
                    <DivIndiomas>
                      <p style={{ color: 'white' }}>Indioma</p>
                      <TxtLanguage onClick={handlePortugues}>Portugues</TxtLanguage>
                      <TxtLanguage onClick={handlePortugues}>ingles</TxtLanguage>
                    </DivIndiomas>
                    <DivLegendas>
                      <p style={{ color: 'white' }}>Legendas</p>
                      <TxtLanguage onClick={handlePortugues}>Portugues</TxtLanguage>
                      <TxtLanguage onClick={handlePortugues}>ingles</TxtLanguage>
                    </DivLegendas>
                  </DivLanguage>
                )}
              </InfoContainer>
            </GradienteLeft>
          </Gradiente>
        </ContenerWacthPage>
      ) : (
        <ContenerWacthPage
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        >
          <Gradiente>
            <GradienteLeft>
              <HeaderInfoContainer>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png"
                  alt="Logo Netflix"
                />
                <p>Filme</p>
              </HeaderInfoContainer>
              <InfoContainer>
                <h1>{data.title}</h1>
                <DivInfo>
                  <p style={{ color: 'green' }}>{data.vote_average} pontos</p>
                  <p>{firstDateMovie.getFullYear()}</p>
                  <p> {fuulTime} hr</p>
                  <div>
                    <h1>HD</h1>
                  </div>
                </DivInfo>
                <Overview>
                  <p>{data.overview}</p>
                </Overview>
                <ConteneirButtons>
                  <Button>
                    <ThumbUpAltIcon />
                    <p style={{ marginLeft: '1vh' }}>Classificar este Titulo</p>
                  </Button>
                  <Button>
                    <PlayArrowIcon />
                    <p style={{ marginLeft: '1vh' }}>Assitir</p>
                  </Button>
                  <Button>
                    <VideoLibrarySharp />
                    <p style={{ marginLeft: '1vh' }}>Episodis e mais </p>
                  </Button>
                  <Button onClick={handleLanguage}>
                    <SubtitlesIcon />
                    <p style={{ marginLeft: '1vh' }}>Indioma e legendas </p>
                  </Button>
                  {currentOpacity && (
                    <DivLanguage>
                      <DivIndiomas>
                        <p style={{ color: 'white' }}>Indioma</p>
                        <TxtLanguage onClick={handlePortugues}>Portugues</TxtLanguage>
                        <TxtLanguage onClick={handlePortugues}>ingles</TxtLanguage>
                      </DivIndiomas>
                      <DivLegendas>
                        <p style={{ color: 'white' }}>Legendas</p>
                        <TxtLanguage onClick={handlePortugues}>Portugues</TxtLanguage>
                        <TxtLanguage onClick={handlePortugues}>ingles</TxtLanguage>
                      </DivLegendas>
                    </DivLanguage>
                  )}
                </ConteneirButtons>
              </InfoContainer>
            </GradienteLeft>
          </Gradiente>
        </ContenerWacthPage>
      )}
    </>
  )
}

export default CardDetailTv
