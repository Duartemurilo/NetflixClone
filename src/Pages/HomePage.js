import React, { useEffect } from 'react'
import { ListMovie } from '../Hooks/useRequestData'
import { AllList, ContenerHomePage, Footer } from '../Styles/Pages/HomePageStyle'
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp'
import MovieRow from '../Components/Movie-row'

const HomePage = () => {
  const listMovie = ListMovie()

  console.log(listMovie)

  const list = listMovie?.map((move) => {
    return (
      <div key={move.slug}>
        <MovieRow moveData={move} req={move.req} />
      </div>
    )
  })

  useEffect(() => {}, [])

  return (
    <ContenerHomePage>
      <AllList>{list}</AllList>

      <Footer>
        <p>
          Feito Pelo brabo do Murilo <br />
          <br />
          Clone Netflix <br />
          <FavoriteSharpIcon style={{ marginTop: '2vh' }} />
        </p>
      </Footer>
    </ContenerHomePage>
  )
}

export default HomePage
