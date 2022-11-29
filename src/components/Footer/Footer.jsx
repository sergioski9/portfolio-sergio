import FooterInfo from './FooterInfo'
import './Footer.css'

function Footer({ footerTextPrimary, footerTextSecond, footerAuthor,
  footerPath }) {
  return (
    <section id='footer'>
      <div className='footer-container'>
        <FooterInfo
          footerTextPrimary={footerTextPrimary}
          footerTextSecond={footerTextSecond}
          footerAuthor={footerAuthor}
          footerPath={footerPath}
        />
      </div>
      <div className='footer-border'></div>
    </section>
  )
}

export default Footer
