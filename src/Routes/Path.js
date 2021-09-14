export const goToHomePage = (history,perfil) => {
  history.push(`/`)
}

export const goToWatchPage = (history,details,type) => {
  history.push(`/Watch/${details}/${type}`)
}

export const goToPerfilPage = (history) => {
  history.push(`/PerfilPage`)
}