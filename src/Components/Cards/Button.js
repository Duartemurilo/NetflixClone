import React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import VideoLibrarySharp from '@material-ui/icons/VideoLibrarySharp'
import SubtitlesIcon from '@material-ui/icons/Subtitles'
import { Button } from '../../Styles/Cards/CardsDetail'

const ButtonsCard = ({ type, handleLanguage }) => {
  const renderBennefits = () => {
    switch (type) {
      case 'rank':
        return (
          <Button>
            <ThumbUpAltIcon />
            <p>Classificar este Titulo</p>
          </Button>
        )

      case 'temporadas':
        return (
          <Button>
            <PlayArrowIcon />
            <p>Temporada 1 ep 1</p>
          </Button>
        )
      case 'episodios':
        return (
          <Button>
            <VideoLibrarySharp />
            <p>Episodios e mais </p>
          </Button>
        )
      case 'idiomas':
        return (
          <Button onClick={handleLanguage}>
            <SubtitlesIcon />
            <p>Indioma e legendas </p>
          </Button>
        )
      case 'assistir':
        return (
          <Button>
            <PlayArrowIcon />
            <p>Assitir</p>
          </Button>
        )
      default:
        console.log(`n deu nd `)
    }
  }
  return <div>{renderBennefits()}</div>
}

export default ButtonsCard
