import { useEffect } from 'react'
import { effectSmoothieScroll } from './../../utils'
import './Footer.css'

function FooterInfo({ footerTextPrimary, footerTextSecond, footerPath,
  footerAuthor }) {
  useEffect(() => {
    effectSmoothieScroll('.footer-text-author')
  })

  return (
    <div className='footer-container-info text-center'>
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
  )
}

export default FooterInfo
