import axios from 'axios'
import { BaseUrl, ApiKey } from '../Constants/Url'

import { useState, useEffect } from 'react'

export function UseRequestData(endPoint) {
  const [data, setData] = useState([])

  useEffect(() => {
    let cancel

    axios({
      method: 'GET',
      url: `${BaseUrl}${endPoint}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setData(res.data)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
      })

    return () => cancel()
  }, [endPoint])

  // useEffect(() => {
  //   axios
  //     .get(`${BaseUrl}${endPoint}`)
  //     .then((res) => {
  //       setData(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [endPoint])

  return data
}

export const ListMovie = () => {
  const list = [
    {
      slug: 'Originais',
      title: 'Originais Netflix',
      req: UseRequestData(`discover/tv?with_network=213&api_key=${ApiKey}`),
    },
    {
      slug: 'trending',
      title: 'Melhores da semana ',
      req: UseRequestData(`trending/all/week?language=pt-BR&api_key=${ApiKey}`),
    },
    {
      slug: 'tops',
      title: 'Os melhores ',
      req: UseRequestData(`movie/top_rated?language=pt-BR&api_key=${ApiKey}`),
    },
    {
      slug: 'action',
      title: 'Açåo',
      req: UseRequestData(`discover/movie?with-genres=28?language=pt-BR&api_key=${ApiKey}`),
    },
    {
      slug: 'tvPopular',
      title: 'Populares na Tv',
      req: UseRequestData(`tv/popular?language=pt-BR&api_key=${ApiKey}`),
    },
    {
      slug: 'tvTopRated',
      title: 'Melhores da Tv',
      req: UseRequestData(`tv/top_rated?language=pt-BR&api_key=${ApiKey}`),
    },
    {
      slug: 'documentary',
      title: 'Documentarios',
      req: UseRequestData(`discover/movie?with-genres=99?language=pt-BR&api_key=${ApiKey}`),
    },
  ]
  return list
}
