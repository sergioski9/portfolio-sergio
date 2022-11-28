import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { BsWhatsapp } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { GrStatusGood } from 'react-icons/gr'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { verifyLenghtText } from './../../utils'
import './Contact.css'

function ContactLink({ linkedinPath, githubPath, whatsappNumber, email }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='contact-container-links row justify-content-center'>
      <div className='contact-links col-12 col-md-5'>
        <h5
          onClick={() => window.open('wa.link/0re4r5', '_blank')}
          className='contact-links-text'
        >
          <BsWhatsapp size={'2rem'} className='contact-links-icons' />
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
          <FaGithub size={'2rem'} className='contact-links-icons' />
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
          <FaLinkedin size={'2rem'} className='contact-links-icons' />
          <span className='contact-links-text-margin'>
            {verifyLenghtText(linkedinPath)}
          </span>
        </h5>
      </div>
      <div className='contact-links col-12 col-md-5'>
        <div className='about-social-clipboard-message'>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <GrStatusGood
                size={'2rem'}
                className='alert-dialog-icon-custom'
              />
              {"Copied Email"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {email}
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <h5
          onClick={() => {
            navigator.clipboard.writeText(email)
            handleClickOpen()
            setTimeout(handleClose, '1000')
          }}
          className='contact-links-text'
        >
          <HiOutlineMail size={'2rem'} className='contact-links-icons' />
          <span className='contact-links-text-margin'>
            {verifyLenghtText(email)}
          </span>
        </h5>
      </div>
    </div>
  )
}

export default ContactLink
