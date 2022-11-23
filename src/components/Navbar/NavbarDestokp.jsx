import React from 'react'
import { NavbarLogoDestokp } from './NavbarLogo'
import NavbarButton from './NavbarButton'
import NavbarLink from './NavbarLink'
import './Navbar.css'

function NavbarDestokp({ nameLogo, homePath, contactPath, dataNavbarLinks }) {

  return (
    <div className='navbar-destokp'>
      <div className='row justify-content-between align-items-center text-center'>
        <NavbarLogoDestokp
          name={nameLogo}
          path={homePath}
        />
        {
          dataNavbarLinks && dataNavbarLinks.map((data, index) => {
            return (
              <NavbarLink
                key={index + 1}
                name={data.name}
                path={data.path}
                className={'col-1'}
              />
            )
          })
        }
        <NavbarButton
          id='navbar-link-contact'
          name={'Contact'}
          path={contactPath}
          className={'col-2'}
        />
      </div>
    </div>
  )
}

export default NavbarDestokp
