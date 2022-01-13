import React, { useEffect, useState } from 'react'
import { ListMovie, UseRequestData } from '../Hooks/useRequestData'
import { ListContainer, HomePageContainer, Footer } from '../Styles/Pages/HomePageStyle'
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp'
import MovieRow from '../Components/Movie-row'
import Header from '../Components/Headers/Header'
import { ApiKey } from '../Constants/Url'
import BannerMove from '../Components/Headers/BannerMove'
import { AuthContext } from '../AuthContext'
import { OrangeProfile, BlueProfile, RedProfile, GreenProfile } from '../Constants/UrlImg'

const HomePage = () => {
  const [black, setBlack] = useState(false)
  const { currentProfile } = React.useContext(AuthContext)

  const idFeature = () => {
    let id = 451048
    if (currentProfile === BlueProfile) {
      id = 639721
    } else if (currentProfile === RedProfile) {
      id = 451048
    } else if (currentProfile === GreenProfile) {
      id = 566525
    } else if (currentProfile === OrangeProfile) {
      id = 580489
    }

    return id
  }

  const idMove = idFeature()

  const Feature = UseRequestData(`movie/${idMove}?language=pt-BR&api_key=${ApiKey}`)

  const listMovie = ListMovie()

  const list = listMovie?.map((move) => {
    return (
      <div key={move.id}>
        <MovieRow title={move.title} req={move.req} move={move} />
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
