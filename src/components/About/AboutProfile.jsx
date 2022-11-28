import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { AboutSocialIcon, AboutSocialImage } from './AboutSocial'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrStatusGood } from 'react-icons/gr'
import './About.css'

function AboutProfile({ imgPath, name, email, githubPath, linkedinPath }) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div
      className='about-container-profile col-12 col-md-4 col-lg-3 my-5 text-center'
    >
      <AboutSocialImage imgPath={imgPath} />
      <div className='about-social-name'>
        <h3>{name}</h3>
      </div>
      <div className='about-social-links'>
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
        <AboutSocialIcon
          onClick={() => {
            navigator.clipboard.writeText(email)
            handleClickOpen()
            setTimeout(handleClose, '1000')
          }}
        >
          <HiOutlineMail size={'2.4rem'} className='about-social-icons' />
        </AboutSocialIcon>
        <AboutSocialIcon onClick={() => window.open(githubPath, '_blank')}>
          <FaGithub size={'2rem'} className='about-social-icons' />
        </AboutSocialIcon>
        <AboutSocialIcon onClick={() => window.open(linkedinPath, '_blank')}>
          <FaLinkedin size={'2rem'} className='about-social-icons' />
        </AboutSocialIcon>
      </div>
    </div>
  )
}

export default AboutProfile
