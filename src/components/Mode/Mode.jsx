import React, { useState } from 'react'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { lightMode, darkMode } from './ModeUtils'
import './Mode.css'

function Mode() {
  const [ toggle, setToggle ] = useState(false)

  const changeToggle = () => setToggle(!toggle)

  if (toggle) {
    lightMode()
  } else {
    darkMode()
  }

  return (
    <div className='row justify-content-end'>
      <div className='col-3 col-md-2 col-lg-1'>
        <input
          onChange={() => changeToggle()}
          type="checkbox"
          className="checkbox"
          id="checkbox"
        />
        <label for="checkbox" className="label">
          <BsFillSunFill className='fas fa-sun'  />
          <BsFillMoonStarsFill className="fas fa-moon" />
          <div className='ball'></div>
        </label>
      </div>
    </div>
  )
}

export default Mode
