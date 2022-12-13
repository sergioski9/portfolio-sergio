const setRoot = (key, value) => document.documentElement.style.setProperty(key, value)

const lightMode = () => {
  setRoot('--color-primary', '#f77f00')
  setRoot('--color-secondary', 'black')
  setRoot('--color-text-content-secondary', 'black')
  setRoot('--color-wave', '#f4f1de')
  setRoot('--color-web-bar-slider', 'rgb(43, 52, 67)')
  setRoot('--color-background-primary', '#DEE4E7')
  setRoot('--color-background-navbar-sticky', '#edede9')
  setRoot('--linear-gradient-background-primary', '#DEE4E7')
  setRoot('--color-background-card', '#f8f9fa')
  setRoot('--color-shadow-card', '#e9ecef')
  setRoot('--color-background-footer', '#f4f1de')
}

const darkMode = () => {
  setRoot('--color-web-bar-slider', '#0077b6')
  setRoot('--color-primary', '#0096c7')
  setRoot('--color-secondary', 'rgb(249, 249, 249)')
  setRoot('--color-text-content-secondary', 'rgb(184, 184, 184)')
  setRoot('--color-wave', '#33425B')
  setRoot('--color-web-bar-slider', '#0077b6')
  setRoot('--color-background-primary', 'rgb(43, 52, 67)')
  setRoot('--color-background-navbar-sticky', 'rgb(37, 49, 68)')
  setRoot('--color-background-card', '#404d65')
  setRoot('--color-shadow-card', '#2c3649')
  setRoot('--color-background-footer', 'rgb(36, 44, 58)')
  setRoot('--linear-gradient-background-primary', 'linear-gradient(90deg, rgba(43, 52, 67, 1) 0%, rgb(38, 53, 78) 50%, rgba(43, 52, 67, 1) 100%)')
}

export { lightMode, darkMode  }
