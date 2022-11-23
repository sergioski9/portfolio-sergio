import NavbarMobile from './NavbarMobile'
import NavbarDestokp from './NavbarDestokp'
import './Navbar.css'

function Navbar({ nameLogo, aboutPath, skillsPath, servicePath,
  projectsPath, contactPath, homePath }) {

  return (
    <div className='container-navbar' id='home'>
      <header>
        <nav className='navbar-content'>
          <ul className='navbar-info'>
            <NavbarDestokp
              nameLogo={nameLogo}
              aboutPath={aboutPath}
              servicePath={servicePath}
              skillsPath={skillsPath}
              projectsPath={projectsPath}
              contactPath={contactPath}
              homePath={homePath}
            />
            <NavbarMobile
              nameLogo={nameLogo}
              aboutPath={aboutPath}
              servicePath={servicePath}
              skillsPath={skillsPath}
              projectsPath={projectsPath}
              contactPath={contactPath}
            />
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
