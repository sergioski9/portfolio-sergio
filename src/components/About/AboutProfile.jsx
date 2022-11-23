import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function AboutProfile({ imgPath }) {
  return (
    <div className='about-container-profile col-12 col-md-4 col-lg-3 my-5'>
      <div className='d-inline-block about-border-profile'>
        <img
          className='about-image-profile'
          src={imgPath}
          alt="developer-profile"
        />
      </div>
      <div className='about-social-name'>
        <h3>Sergio Rodas</h3>
      </div>
      <div className='about-social-links'>
        <div className='d-inline-block mx-2'>
          <HiOutlineMail size={'2.5rem'} color={'#FF731F'} />
        </div>
        <div className='d-inline-block mx-2'>
          <FaGithub size={'2rem'} color={'#FF731F'} />
        </div>
        <div className='d-inline-block mx-2'>
          <FaLinkedin size={'2rem'} color={'#FF731F'} />
        </div>
      </div>
    </div>
  )
}

export default AboutProfile
