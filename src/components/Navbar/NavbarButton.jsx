import './Navbar.css'

function NavbarButton({ name, className, path, id, onClick}) {
  return (
    <li
      onClick={() => onClick && onClick()}
      className={className ? className : 'col-1'}
    >
      <a href={path} className='navbar-link' id={id ? id : ''}>
        {name}
      </a>
    </li>
  )
}

export default NavbarButton
