import React from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import { BlueProfile, RedProfile, GreenProfile, OrangeProfile } from '../Constants/UrlImg'
import { goToHomePage } from '../Routes/Path'
import {
  ButtonPerfis,
  ConteneirPerfis,
  ContenerPerfilPage,
  ImgPerfis,
  TextoPerfil,
} from '../Styles/Pages/PerfilPageStyled'

const PerfilPage = () => {
  const { setCurrentProfile } = React.useContext(AuthContext)

  const changeProfile = (path, currentProfile) => {
    setCurrentProfile(currentProfile)
    path(history)
  }

  const history = useHistory()

  return (
    <ContenerPerfilPage>
      <TextoPerfil>Quem esta assitindo?</TextoPerfil>
      <ConteneirPerfis>
        <div>
          <ImgPerfis onClick={() => changeProfile(goToHomePage, RedProfile)} src={RedProfile} alt="Perfil" />
          <p style={{ textAlign: 'center' }}>musteca</p>
        </div>
        <div>
          <ImgPerfis onClick={() => changeProfile(goToHomePage, BlueProfile)} src={BlueProfile} alt="Perfil" />
          <p style={{ textAlign: 'center' }}>muzeca</p>
        </div>
        <div>
          <ImgPerfis onClick={() => changeProfile(goToHomePage, GreenProfile)} src={GreenProfile} alt="Perfil" />
          <p style={{ textAlign: 'center' }}>muzi</p>
        </div>
        <div>
          <ImgPerfis onClick={() => changeProfile(goToHomePage, OrangeProfile)} src={OrangeProfile} alt="Perfil" />
          <p style={{ textAlign: 'center' }}>mumuzinho</p>
        </div>
      </ConteneirPerfis>
      <ButtonPerfis>GERENCIAR PERFIS</ButtonPerfis>
    </ContenerPerfilPage>
  )
}

export default PerfilPage
