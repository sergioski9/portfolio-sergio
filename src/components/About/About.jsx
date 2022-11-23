import AboutInfo from './AboutInfo'
import AboutProfile from './AboutProfile'
import './About.css'

function About({ imgPath }) {

  return (
    <div
      className='about-container-background row container justify-content-center'
    >
      <AboutProfile imgPath={imgPath} />
      <AboutInfo

      />
    </div>
  )
}

export default About
