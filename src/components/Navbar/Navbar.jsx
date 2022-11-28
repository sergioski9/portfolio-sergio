import { useEffect, useState } from 'react'
import { changeBackground } from './../../utils'
import NavbarMobile from './NavbarMobile'
import NavbarDestokp from './NavbarDestokp'
import './Navbar.css'

function Navbar({ nameLogo, contactPath, homePath, dataNavbarLinks }) {
  const [ showNavbarBg, setShowNavbarBg ] = useState(false)

  useEffect(() => {
    changeBackground(setShowNavbarBg)
    window.addEventListener('scroll', () => changeBackground(setShowNavbarBg))
  }, [])

  return (
    <div className={`container-navbar ${showNavbarBg ? 'navbar-bg' : ''}`}>
      <header>
        <nav className='navbar-content'>
          <ul className='navbar-info'>
            <NavbarDestokp
              nameLogo={nameLogo}
              contactPath={contactPath}
              homePath={homePath}
              dataNavbarLinks={dataNavbarLinks}
            />
            <NavbarMobile
              nameLogo={nameLogo}
              contactPath={contactPath}
              homePath={homePath}
              dataNavbarLinks={dataNavbarLinks}
            />
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
