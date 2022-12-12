import { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ContactLinkFrame, ContactLinkText } from './ContactLinkUtils'
import ModalEmail from './../Modal'
import './Contact.css'

function ContactLink({ linkedinPath, githubPath, whatsappNumber, email }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const onClickCopyEmail = () => {
    navigator.clipboard.writeText(email)
    handleClickOpen()
    setTimeout(handleClose, '1000')
  }

  return (
    <div className='contact-container-links row justify-content-center'>
      <ContactLinkFrame onClick={() => window.open('wa.link/0re4r5', '_blank')}>
        <BsWhatsapp size={'2rem'} className='contact-links-icons' />
        <ContactLinkText text={whatsappNumber} />
      </ContactLinkFrame>
      <ContactLinkFrame onClick={() => window.open(githubPath, '_blank')}>
        <FaGithub size={'2rem'} className='contact-links-icons' />
        <ContactLinkText text={githubPath} />
      </ContactLinkFrame>
      <ContactLinkFrame onClick={() => window.open(linkedinPath, '_blank')}>
        <FaLinkedin size={'2rem'} className='contact-links-icons' />
        <ContactLinkText text={linkedinPath} />
      </ContactLinkFrame>
      <ContactLinkFrame onClick={onClickCopyEmail}>
        <HiOutlineMail size={'2rem'} className='contact-links-icons' />
        <ContactLinkText text={email} />
      </ContactLinkFrame>
      <ModalEmail
        open={open}
        handleClose={handleClose}
        email={email}
        title={"Copied Email"}
      />
    </div>
  )
}

export default ContactLink
