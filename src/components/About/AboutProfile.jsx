import { useState } from 'react'
import { AboutSocialIcon, AboutSocialImage } from './AboutSocial'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ModalEmail from './../Modal'
import './About.css'

function AboutProfile({ imgPath, name, email, githubPath, linkedinPath }) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const onClickCopyEmail = () => {
    navigator.clipboard.writeText(email)
    handleClickOpen()
    setTimeout(handleClose, '1000')
  }

  return (
    <div className='about-container-profile col-12 col-md-4 col-lg-3 my-5 text-center'>
      <AboutSocialImage imgPath={imgPath} />
      <div className='about-social-name'>
        <h3>{name}</h3>
      </div>
      <div className='about-social-links'>
        <ModalEmail open={open} handleClose={handleClose} email={email} />
        <AboutSocialIcon onClick={() => onClickCopyEmail() }>
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
