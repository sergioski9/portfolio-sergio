import { Marked } from './../../utils'
import './About.css'

function AboutInfo({ aboutTitle, aboutSubTitle, aboutDescriptionPrimary,
  aboutDescriptionSecondary }) {

  return (
    <div className='about-container-info col-12 col-md-8 col-lg-7'>
      <div className='about-title'>
        <h3 className='about-title-text'>
          <Marked /> {aboutTitle}
        </h3>
      </div>
      <div className='about-sub-title'>
        <h4 className='about-sub-title-text'>
          {aboutSubTitle}
        </h4>
      </div>
      <div className='about-description'>
        <p className='about-description-text'>
          {aboutDescriptionPrimary}
        </p>
        <p className='about-description-text-secondary'>
          {aboutDescriptionSecondary}
        </p>
      </div>
    </div>
  )
}

export default AboutInfo
