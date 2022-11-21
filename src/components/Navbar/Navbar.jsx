import './Navbar.css'

function Navbar() {
  return (
    <div className='container-navbar'>
      <header>
        <nav className='navbar'>
          <ul className='row navbar-info justify-content-between'>
            <div className='col-6'>Sergio Rodas</div>
            <div className='navbar-destokp'>
              <li className='col-6'>About Me</li>
              <li className='col-6'>Skills</li>
              <li className='col-6'>Service</li>
              <li className='col-6'>Projects</li>
              <li className='col-6'>Contact</li>
            </div>
            <div className='navbar-mobile'>

            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
