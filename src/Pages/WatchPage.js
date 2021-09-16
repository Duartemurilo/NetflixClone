import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ApiKey, BaseUrl } from '../Constants/Url'
import CardDetail from '../Components/Cards/CardDetail'

const WatchPage = () => {
  const history = useHistory()
  const param = useParams()

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
    <>
      {tvdata.backdrop_path ? (
        <CardDetail data={tvdata} type="tvdata" />
      ) : (
        <CardDetail data={movieData} type="movieData" />
      )}
    </>
  )
}

export default WatchPage
