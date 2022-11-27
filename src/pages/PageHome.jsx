import {
  dataSkills, dataNavbarLinks, dataProjects, email, githubPath, titleJob,
  dataService, linkedinPath, nameLogo, contactPath, homePath,
  namePresentation, textButton, nameProfile, aboutTitle, aboutSubTitle,
  aboutDescriptionPrimary, aboutDescriptionSecondary, skillsTitle, titleService,
  titleProjects, titleContact, descriptionContact, whatsappNumber,
  footerTextPrimary, footerTextSecond, footerAuthor, footerPath,
  descriptionPresentation, textHiddenTech
} from './../data'
import Navbar from './../components/Navbar'
import Presentation from './../components/Presentation'
import About from './../components/About'
import Skills from './../components/Skills'
import Service from './../components/Service'
import Projects from './../components/Projects'
import Contact from './../components/Contact'
import Footer from './../components/Footer'
import imgHome from './../media/images/developer.png'
import imgSergio from './../media/images/sergio.jpeg'

function PageHome() {
  return (
    <div>
      <Navbar
        nameLogo={nameLogo}
        contactPath={contactPath}
        homePath={homePath}
        dataNavbarLinks={dataNavbarLinks}
      />
      <Presentation
        titleJob={titleJob}
        name={namePresentation}
        description={descriptionPresentation}
        textButton={textButton}
        imgPath={imgHome}
      />
      <About
        imgPath={imgSergio}
        githubPath={githubPath}
        linkedinPath={linkedinPath}
        email={email}
        nameProfile={nameProfile}
        aboutTitle={aboutTitle}
        aboutSubTitle={aboutSubTitle}
        aboutDescriptionPrimary={aboutDescriptionPrimary}
        aboutDescriptionSecondary={aboutDescriptionSecondary}
      />
      <Skills
        skillsTitle={skillsTitle}
        infoCards={dataSkills}
      />
      <Service
        dataService={dataService}
        title={titleService}
      />
      <Projects
        dataProjects={dataProjects}
        title={titleProjects}
        textHiddenTech={textHiddenTech}
      />
      <Contact
        title={titleContact}
        description={descriptionContact}
        email={email}
        githubPath={githubPath}
        linkedinPath={linkedinPath}
        whatsappNumber={whatsappNumber}
      />
      <Footer
        footerTextPrimary={footerTextPrimary}
        footerTextSecond={footerTextSecond}
        footerAuthor={footerAuthor}
        footerPath={footerPath}
      />
    </div>
  )
}

export default PageHome
