import { verifyLenghtText } from './../../utils'
import './Contact.css'

function ContactLinkFrame({ children, onClick }) {
  return (
    <div className='contact-links col-12 col-md-5'>
      <h5
        onClick={() => onClick && onClick()}
        className='contact-links-text'
      >
        {children}
      </h5>
    </div>
  )
}

function ContactLinkText({ text }) {
  return (
    <span className='contact-links-text-margin'>
      {verifyLenghtText(text)}
    </span>
  )
}

export { ContactLinkFrame, ContactLinkText }
