import { useState } from 'react'
import { NavbarLogoMobile } from './NavbarLogo'
import { NavbarLogoMenuMobile } from './NavbarLogo'
import NavbarButton from './NavbarButton'
import NavbarLink from './NavbarLink'
import './Navbar.css'

function NavbarMobile({ nameLogo, homePath, dataNavbarLinks, contactPath }) {
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
          path={homePath}
        />
        <NavbarLogoMenuMobile
          toggle={toggle}
        />
      </div>
      <div hidden={!showMenu} className='navbar-container-options-mobile'>
        {
          dataNavbarLinks && dataNavbarLinks.map((data, index) => {
            return (
              <NavbarLink
                key={index + 1}
                name={data.name}
                className={'none'}
                onClick={setShowMenuFalse}
                path={data.path}
              />
            )
          })
        }
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
