import React from 'react'
import { useHistory } from 'react-router-dom'
import { PerfilRed } from '../../Constants/UrlImg'
import { goToPerfilPage } from '../../Routes/Path'
import { ContainerHeaderNetflix, Logo, Perfil } from '../../Styles/Components/Headers/Header'

const HeaderNetflix = ({ black }) => {
  const history = useHistory()

  return (
    <div>
      {black ? (
        <ContainerHeaderNetflix style={{ backgroundColor: 'transparent' }}>
          <Logo
            style={{ opacity: '0' }}
            src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/netflix-logo.png"
            alt="Logo"
          />
          <Perfil
            style={{ opacity: '0' }}
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt="Perfil"
          />
        </ContainerHeaderNetflix>
      ) : (
        <ContainerHeaderNetflix>
          <Logo
            src="https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg"
            alt="Logo"
          />
          <Perfil onClick={() => goToPerfilPage(history)} src={PerfilRed} alt="Perfil" />
        </ContainerHeaderNetflix>
      )}
    </div>
  )
}

export default HeaderNetflix
