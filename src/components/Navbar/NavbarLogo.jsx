import { useEffect } from 'react'
import { effectSmoothieScroll } from './../../utils'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import './Navbar.css'

const logoSymbolInit = '</'
const logoSymbolEnd = '>'

function NavbarLogoDestokp({ name, path }) {
  useEffect(() => {
    effectSmoothieScroll('.navbar-logo')
  })

  return (
    <div className='col-md-4 col-lg-4 col-xl-3'>
      <a href={path} className='navbar-logo'>
        <span className='navbar-color-symbol'>{logoSymbolInit} </span>
        {name}
        <span className='navbar-color-symbol'> {logoSymbolEnd}</span>
      </a>
    </div>
  )
}

function NavbarLogoMobile({ name, path, toggle }) {
  useEffect(() => {
    effectSmoothieScroll('.navbar-logo-mobile')
  })

  return (
    <a
      onClick={() => toggle()}
      href={path}
      className='d-inline-block navbar-logo-mobile col-8'
    >
      <span className='navbar-color-symbol'>{logoSymbolInit} </span>
      {name}
      <span className='navbar-color-symbol'> {logoSymbolEnd}</span>
    </a>
  )
}

function NavbarLogoMenuMobile({ toggle, showMenu }) {
  return (
    <div className='d-inline-block col-2'>
      <div
        onClick={() => toggle()}
        className='navbar-container-menu-mobile text-center'
      >
        {showMenu && <GiCancel size={'1.4rem'} className='navbar-menu-mobile-icon' />}
        {!showMenu && <GiHamburgerMenu size={'1.4rem'} className='navbar-menu-mobile-icon' />}
      </div>
    </div>
  )
}

export { NavbarLogoDestokp, NavbarLogoMobile, NavbarLogoMenuMobile }
