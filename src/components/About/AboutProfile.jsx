import { AboutSocialIcon, AboutSocialImage } from './AboutSocial'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './About.css'

function AboutProfile({ imgPath, name, email, githubPath, linkedinPath }) {

  return (
    <div
      className='about-container-profile col-12 col-md-4 col-lg-3 my-5 text-center'
    >
      <AboutSocialImage imgPath={imgPath} />
      <div className='about-social-name'>
        <h3>{name}</h3>
      </div>
      <div className='about-social-links'>
        <AboutSocialIcon
          onClick={() => navigator.clipboard.writeText(email)}
          title='Copy Email'
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
