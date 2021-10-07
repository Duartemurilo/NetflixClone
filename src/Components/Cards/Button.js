import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import SubtitlesIcon from '@mui/icons-material/Subtitles'
import { Button } from '../../Styles/Cards/CardsDetail'

const ButtonsCard = ({ type, handleLanguage }) => {
  const renderBennefits = () => {
    switch (type) {
      case 'rank':
        return (
          <Button>
            <ThumbUpIcon />
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
            <VideoLibraryIcon />
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
