import { useState } from 'react'
import { NavbarLogoMobile } from './NavbarLogo'
import { NavbarLogoMenuMobile } from './NavbarLogo'
import NavbarButton from './NavbarButton'
import NavbarLink from './NavbarLink'
import './Navbar.css'

function NavbarMobile({ nameLogo, homePath, dataNavbarLinks, contactPath }) {
  const [showMenu, setShowMenu] = useState(false)

  const toggle = () => setShowMenu(!showMenu)
  const toggleHidden = () => setShowMenu(false)

  return (
    <div className='navbar-mobile'>
      <div className='navbar-container-logo-mobile row justify-content-between'>
        <NavbarLogoMobile
          name={nameLogo}
          path={homePath}
          toggle={toggleHidden}
        />
        <NavbarLogoMenuMobile
          toggle={toggle}
          showMenu={showMenu}
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
                onClick={toggle}
                path={data.path}
              />
            )
          })
        }
        <NavbarButton
          name={'Contact'}
          className={'navbar-link-contact-mobile-container'}
          onClick={toggle}
          path={contactPath}
          id={'navbar-link-contact-mobile'}
        />
      </div>
    </div>
  )
}

export default NavbarMobile
