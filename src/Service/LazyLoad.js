export const lazyload = () => {
  const images = document.querySelectorAll('img[data-src]')

  for (let i = 0; i < images.length; i++) {
    if (images[i].getBoundingClientRect().top < window.innerHeight + 200) {
      images[i].src = images[i].getAttribute('data-src')
    }
  }
}
