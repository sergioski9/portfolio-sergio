import { BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { verifyLenghtText } from './../../utils'
import './Contact.css'

function ContactLink({ linkedinPath, githubPath, whatsappNumber, email }) {
  return (
    <div className='contact-container-links row justify-content-center'>
      <div className='contact-links col-12 col-md-5'>
        <h5
          onClick={() => window.open('wa.link/0re4r5', '_blank')}
          className='contact-links-text'
        >
          <BsWhatsapp
            color='#acaba9'
            size={'2rem'}
            onMouseOver={({ target }) => {
              target.style.color = "#FF731F"
              target.style.transition = "0.4s"
            }}
            onMouseOut={({ target }) => {
              target.style.color = "#acaba9"
              target.style.transition = "0.4s"
            }}
          />
          <span className='contact-links-text-margin'>
            {verifyLenghtText(whatsappNumber)}
          </span>
        </h5>
      </div>
      <div className='contact-links col-12 col-md-5'>
        <h5
          onClick={() => window.open(githubPath, '_blank')}
          className='contact-links-text'
        >
          <FaGithub
            color='#acaba9'
            size={'2rem'}
            onMouseOver={({ target }) => {
              target.style.color = "#FF731F"
              target.style.transition = "0.4s"
            }}
            onMouseOut={({ target }) => {
              target.style.color = "#acaba9"
              target.style.transition = "0.4s"
            }}
          />
          <span className='contact-links-text-margin'>
            {verifyLenghtText(githubPath)}
          </span>
        </h5>
      </div>
      <div className='contact-links col-12 col-md-5'>
        <h5
          onClick={() => window.open(linkedinPath, '_blank')}
          className='contact-links-text'
        >
          <FaLinkedin
            color='#acaba9'
            size={'2rem'}
            onMouseOver={({ target }) => {
              target.style.color = "#FF731F"
              target.style.transition = "0.4s"
            }}
            onMouseOut={({ target }) => {
              target.style.color = "#acaba9"
              target.style.transition = "0.4s"
            }}
          />
          <span className='contact-links-text-margin'>
            {verifyLenghtText(linkedinPath)}
          </span>
        </h5>
      </div>
      <div className='contact-links col-12 col-md-5'>
        <h5
          title='Copy Email'
          onClick={() => navigator.clipboard.writeText(email)}
          className='contact-links-text'
        >
          <HiOutlineMail
            color='#acaba9'
            size={'2rem'}
            onMouseOver={({ target }) => {
              target.style.color = "#FF731F"
              target.style.transition = "0.4s"
            }}
            onMouseOut={({ target }) => {
              target.style.color = "#acaba9"
              target.style.transition = "0.4s"
            }}
          />
          <span className='contact-links-text-margin'>
            {verifyLenghtText(email)}
          </span>
        </h5>
      </div>
    </div>
  )
}

export default ContactLink
