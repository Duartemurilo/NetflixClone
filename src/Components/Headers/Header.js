import React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../AuthContext'
import { goToPerfilPage } from '../../Routes/Path'
import { ContainerHeaderNetflix, Logo, Perfil } from '../../Styles/Components/Headers/HeaderStyle'

const HeaderNetflix = ({ black }) => {
  const { currentProfile } = React.useContext(AuthContext)
  const history = useHistory()

  return (
    <div>
      {black ? (
        <ContainerHeaderNetflix style={{ backgroundColor: 'transparent' }}></ContainerHeaderNetflix>
      ) : (
        <ContainerHeaderNetflix>
          <Logo
            src="https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg"
            alt="Logo"
          />
          <Perfil onClick={() => goToPerfilPage(history)} src={currentProfile} alt="Perfil" />
        </ContainerHeaderNetflix>
      )}
    </div>
  )
}

export default HeaderNetflix
