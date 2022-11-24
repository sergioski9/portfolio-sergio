import { Marked } from './../../utils'
import ContactLink from './ContactLink'
import './Contact.css'

function Contact({ title, description, githubPath, linkedinPath,
  whatsappNumber, email }) {
  return (
    <div id='contact'>
      <div className='contact-container'>
        <div className='contact-container-title text-center'>
          <h4 className='contact-title'>
            <Marked /> {title}
          </h4>
        </div>
        <div className='contact-container-description'>
          <p className='contact-description'>{description}</p>
        </div>
        <ContactLink
          githubPath={githubPath}
          linkedinPath={linkedinPath}
          whatsappNumber={whatsappNumber}
          email={email}
        />
      </div>
    </div>
  )
}

export default Contact
