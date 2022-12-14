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
          <BsFillMoonStarsFill className="fas fa-moon" />
          <BsFillSunFill className='fas fa-sun'  />
          <div className='ball'></div>
        </label>
      </div>
    </div>
  )
}

export default Mode
