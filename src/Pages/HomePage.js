import React, { useEffect, useState } from 'react'
import { ListMovie, UseRequestData } from '../Hooks/useRequestData'
import { ListContainer, HomePageContainer, Footer } from '../Styles/Pages/HomePageStyle'
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp'
import MovieRow from '../Components/Movie-row'
import Header from '../Components/Headers/Header'
import { ApiKey } from '../Constants/Url'
import BannerMove from '../Components/Headers/BannerMove'

const HomePage = () => {
  const [black, setBlack] = useState(false)

  const Feature = UseRequestData(`movie/451048?language=pt-BR&api_key=${ApiKey}`)

  const listMovie = ListMovie()

  console.log(listMovie)

  const list = listMovie?.map((move) => {
    return (
      <div>
        <MovieRow title={move.title} req={move.req} />
      </div>
    )
  })

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlack(true)
      } else {
        setBlack(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <HomePageContainer>
      <Header black={black} />
      {Feature && <BannerMove dataFeature={Feature} />}
      <ListContainer>{list}</ListContainer>

      <Footer>
        <p>
          Feito Pelo brabo do Murilo <br />
          <br />
          Clone Netflix <br />
          <FavoriteSharpIcon style={{ marginTop: '2vh' }} />
        </p>
      </Footer>
    </HomePageContainer>
  )
}

export default HomePage
