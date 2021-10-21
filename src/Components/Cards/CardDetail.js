import React, { useState } from 'react'
import { AuthContext } from '../../AuthContext'
import {
  ConteneirButtons,
  ContenerWacthPage,
  DivInfo,
  DivLanguage,
  FullInfoContainer,
  Gradiente,
  GradienteLeft,
  HeaderInfoContainer,
  InfoContainer,
  Overview,
} from '../../Styles/Cards/CardsDetail'
import ButtonsCard from '../Cards/Button'

const CardDetailTv = ({ data, type }) => {
  const [currentOpacity, setCurrentOpacity] = useState(false)
  const { setHeightWatchPage } = React.useContext(AuthContext)

  const handleLanguage = () => {
    setCurrentOpacity(false)
  }

  let soma = 0
  const handleOptionLanguage = () => {
    soma++

    if (soma === 1) {
      setCurrentOpacity(true)
    } else {
      soma = 0
      setCurrentOpacity(false)
    }
  }
  const firstDateMovie = new Date(data.release_date)
  const tempoMinutos = data.runtime

  const duracaoHora = tempoMinutos / 60

  const fuulTime = duracaoHora.toFixed(2)

  const firstDateTv = new Date(data.last_air_date)

  data.overview?.length > 500 ? setHeightWatchPage('150vh') : setHeightWatchPage('115vh')

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
                <FullInfoContainer>
                  <DivInfo>
                    <p style={{ color: 'green' }}>{data.vote_average} pontos</p>
                    <p>{firstDateTv.getFullYear()}</p>
                    <p>{data.number_of_seasons} Temporadas</p>
                    <div>
                      <h2>HD</h2>
                    </div>
                  </DivInfo>
                  <Overview>
                    <p>{data.overview}</p>
                  </Overview>
                </FullInfoContainer>
                <ConteneirButtons>
                  <ButtonsCard type="rank" />
                  <ButtonsCard type="temporadas" />
                  <ButtonsCard type="episodios" />
                  <ButtonsCard type="idiomas" handleLanguage={() => setCurrentOpacity(true)} />
                </ConteneirButtons>

                {currentOpacity && (
                  <DivLanguage>
                    <div style={{ border: 'none' }}>
                      <p style={{ color: 'white' }}>Idioma</p>
                      <p onClick={handleLanguage}>Portugues</p>
                      <p onClick={handleLanguage}>ingles</p>
                    </div>
                    <div>
                      <p style={{ color: 'white' }}>Legendas</p>
                      <p onClick={handleLanguage}>Portugues</p>
                      <p onClick={handleLanguage}>ingles</p>
                    </div>
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
                    <h2>HD</h2>
                  </div>
                </DivInfo>
                <Overview>
                  <p>{data.overview}</p>
                </Overview>
                <ConteneirButtons>
                  <ButtonsCard type="rank" />
                  <ButtonsCard type="assistir" />
                  <ButtonsCard type="episodios" />
                  <ButtonsCard type="idiomas" handleLanguage={handleOptionLanguage} />
                  {currentOpacity && (
                    <DivLanguage>
                      <div style={{ border: 'none' }}>
                        <p style={{ color: 'white' }}>Idioma</p>
                        <p onClick={handleLanguage}>Portugues</p>
                        <p onClick={handleLanguage}>ingles</p>
                      </div>
                      <div>
                        <p style={{ color: 'white' }}>Legendas</p>
                        <p onClick={handleLanguage}>Portugues</p>
                        <p onClick={handleLanguage}>ingles</p>
                      </div>
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
