import NavbarMobile from './NavbarMobile'
import NavbarDestokp from './NavbarDestokp'
import './Navbar.css'

function Navbar({ nameLogo, contactPath, homePath, dataNavbarLinks }) {

  return (
    <div className='container-navbar' id='home'>
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
