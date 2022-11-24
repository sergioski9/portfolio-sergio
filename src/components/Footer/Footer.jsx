import { effectSmoothieScroll } from './../../utils'
import './Footer.css'

function Footer({ footerTextPrimary, footerTextSecond, footerAuthor,
  footerPath }) {
  effectSmoothieScroll('.footer-text-author')

  return (
    <div id='footer'>
      <div className='footer-container'>
        <div className='footer-container-text text-center'>
          <p className='footer-text'>
            {footerTextPrimary}
            <span className='footer-margin'>-</span>
            {footerTextSecond}
            <a
              href={footerPath}
              className='footer-text-author'
            >
              {footerAuthor}
            </a>
          </p>
        </div>
      </div>
      <div className='footer-border'></div>
    </div>
  )
}

export default Footer
