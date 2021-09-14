import React, { useEffect, useState } from 'react'
import { ListMovie, UseRequestData } from '../Hooks/useRequestData'
import { ListContainer, HomePageContainer, Footer } from '../Styles/Pages/HomePageStyle'
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp'
import MovieRow from '../Components/Movie-row'
import Header from '../Components/Headers/Header'
import { ApiKey } from '../Constants/Url'
import BannerMove from '../Components/Headers/BannerMove'

const HomePage = () => {
  const listMovie = ListMovie()
  const Feature = UseRequestData(`movie/451048?language=pt-BR&api_key=${ApiKey}`)

  const list = listMovie?.map((move) => {
    return (
      <div key={move.slug}>
        <MovieRow moveData={move} req={move.req} />
      </div>
    )
  })

  return (
    <HomePageContainer>
      <Header />
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
