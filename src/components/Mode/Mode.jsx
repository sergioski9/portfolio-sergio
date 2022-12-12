import React from 'react'
import './Mode.css'

function Mode() {
  const setRoot = (key, value) => {
    document.documentElement.style.setProperty(key, value)
  }

  const changeMode = () => {
    setRoot('--color-primary', '#184e77')
    setRoot('--color-secondary', '#f48c06')
    setRoot('--color-text-content-secondary', 'rgb(184, 184, 184)')
    setRoot('--color-wave', '#3a86ff')
    setRoot('--color-background-primary', 'white')
    setRoot('--linear-gradient-background-primary', 'white')
  }

  return (
    <button onClick={() => changeMode()}>
      dark mode
    </button>
  )
}

export default Mode
