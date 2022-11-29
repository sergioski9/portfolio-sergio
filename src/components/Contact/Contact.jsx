import ContactInfo from './ContactInfo'
import './Contact.css'

function Contact({ title, description, githubPath, linkedinPath,
  whatsappNumber, email }) {
  return (
    <section id='contact'>
      <ContactInfo
        title={title}
        description={description}
        githubPath={githubPath}
        linkedinPath={linkedinPath}
        whatsappNumber={whatsappNumber}
        email={email}
      />
    </section>
  )
}

export default Contact
