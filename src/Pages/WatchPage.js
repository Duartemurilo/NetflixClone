import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ApiKey, BaseUrl } from '../Constants/Url'
import CardDetail from '../Components/Cards/CardDetail'
import { BodyWacthPage } from '../Styles/Pages/WatchPageStyle'
import { AuthContext } from '../AuthContext'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const WatchPage = () => {
  const isActive = useMediaQuery('(max-width: 450px)')
  const history = useHistory()
  const param = useParams()
  const { heightWatchPage } = React.useContext(AuthContext)
  let currentHeight = isActive ? heightWatchPage : '100vh'

  const [tvdata, setTvData] = useState({})
  const [movieData, setMovieData] = useState({})

  useEffect(() => {
    if (param.type === 'tv') {
      getTvData()
    } else if (param.type === 'movie') {
      getMoveData()
    } else if (param.type === 'undefined') {
      getMoveData()

      getTvData()
    }
  }, [history]) // eslint-disable-line

  const getTvData = () => {
    axios
      .get(`${BaseUrl}tv/${param.details}?language=pt-BR&api_key=${ApiKey}`)
      .then((res) => {
        setTvData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getMoveData = () => {
    axios.get(`${BaseUrl}movie/${param.details}?language=pt-BR&api_key=${ApiKey}`).then((res) => {
      setMovieData(res.data)
    })
  }

  return (
    <BodyWacthPage style={{ height: currentHeight }}>
      {tvdata.backdrop_path ? (
        <CardDetail data={tvdata} type="tvdata" />
      ) : (
        <CardDetail data={movieData} type="movieData" />
      )}
    </BodyWacthPage>
  )
}

export default WatchPage
