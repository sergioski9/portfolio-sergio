import React from 'react'
import { NavbarLogoDestokp } from './NavbarLogo'
import NavbarButton from './NavbarButton'
import NavbarLink from './NavbarLink'
import './Navbar.css'

function NavbarDestokp({ nameLogo, homePath, aboutPath, skillsPath, projectsPath,
  servicePath, contactPath }) {

  return (
    <div className='navbar-destokp'>
      <div className='row justify-content-between align-items-center text-center'>
        <NavbarLogoDestokp
          name={nameLogo}
          path={homePath}
        />
        <NavbarLink
          name={'About'}
          path={aboutPath}
          className={'col-1'}
        />
        <NavbarLink
          name={'Skilss'}
          path={skillsPath}
          className={'col-1'}
        />
        <NavbarLink
          name={'Projects'}
          path={projectsPath}
          className={'col-1'}
        />
        <NavbarLink
          name={'Service'}
          path={servicePath}
          className={'col-1'}
        />
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
