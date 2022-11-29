import AboutInfo from './AboutInfo'
import AboutProfile from './AboutProfile'
import Wave from './../Wave'
import './About.css'

function About({ imgPath, email, linkedinPath, githubPath, nameProfile,
  aboutTitle, aboutSubTitle, aboutDescriptionPrimary,
  aboutDescriptionSecondary }) {

  return (
    <Wave>
      <section className='row justify-content-center' id='about'>
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
      </section>
    </Wave>
  )
}

export default About
