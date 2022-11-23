import { useState } from 'react'
import { NavbarLogoMobile } from './NavbarLogo'
import { NavbarLogoMenuMobile } from './NavbarLogo'
import NavbarButton from './NavbarButton'
import NavbarLink from './NavbarLink'
import './Navbar.css'

function NavbarMobile({ nameLogo, aboutPath, skillsPath, projectsPath,
  servicePath, contactPath }) {
  const [showMenu, setShowMenu] = useState(false)

  const toggle = () => {
    setShowMenu(!showMenu)
  }

  const setShowMenuFalse = () => setShowMenu(false)

  return (
    <div className='navbar-mobile'>
      <div hidden={showMenu} className='navbar-container-logo-mobile row justify-content-between'>
        <NavbarLogoMobile
          name={nameLogo}
        />
        <NavbarLogoMenuMobile
          toggle={toggle}
        />
      </div>
      <div hidden={!showMenu} className='navbar-container-options-mobile'>
        <NavbarLink
          name={'About'}
          className={'none'}
          onClick={setShowMenuFalse}
          path={aboutPath}
        />
        <NavbarLink
          name={'Skills'}
          className={'none'}
          onClick={setShowMenuFalse}
          path={skillsPath}
        />
        <NavbarLink
          name={'Service'}
          className={'none'}
          onClick={setShowMenuFalse}
          path={servicePath}
        />
        <NavbarLink
          name={'Projects'}
          className={'none'}
          onClick={setShowMenuFalse}
          path={projectsPath}
        />
        <NavbarButton
          name={'Contact'}
          className={'none'}
          onClick={setShowMenuFalse}
          path={contactPath}
          id={'navbar-link-contact-mobile'}
        />
      </div>
    </div>
  )
}

export default NavbarMobile
