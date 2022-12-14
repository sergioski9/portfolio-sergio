import { useEffect } from 'react'
import { effectSmoothieScroll } from './../../utils'
import './Navbar.css'

function NavbarLink({ name, path, className, id, onClick }) {
  useEffect(() => {
    effectSmoothieScroll('.nav-link')
  })

  return (
    <li
      onClick={() => onClick && onClick()}
      className={className ? className : 'col-1'}
    >
      <a href={path} className='nav-link' id={id ? id : ''}>
        {name}
      </a>
    </li>
  )
}

export default NavbarLink
