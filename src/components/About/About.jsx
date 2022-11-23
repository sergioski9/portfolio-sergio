import AboutInfo from './AboutInfo'
import AboutProfile from './AboutProfile'
import './About.css'

function About({ imgPath, email, linkedinPath, githubPath, nameProfile,
  aboutTitle, aboutSubTitle, aboutDescriptionPrimary,
  aboutDescriptionSecondary }) {

  return (
    <div className='about-background-wave'>
      <div className='row justify-content-center'>
        <AboutProfile
          imgPath={imgPath}
          githubPath={githubPath}
          linkedinPath={linkedinPath}
          email={email}
          name={nameProfile}
        />
        <AboutInfo
          aboutTitle={aboutTitle}
          aboutSubTitle={aboutSubTitle}
          aboutDescriptionPrimary={aboutDescriptionPrimary}
          aboutDescriptionSecondary={aboutDescriptionSecondary}
        />
      </div>
    </div>
  )
}

export default About
