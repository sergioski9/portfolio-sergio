import { dataSkills, dataNavbarLinks, dataProjects,
  dataService } from './../data'
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
  const email = 'sergiorodascruz@gmail.com'
  const githubPath = 'https://github.com/sergioski9'
  const linkedinPath = 'https://www.linkedin.com/in/sergio-rodas-cruz-405762235/'
  const description = 'Hi, aksjdo iasnd ioasoi dnoais ndion asiodni asndioasnd asndasda asdasda asdasdl asnlakl sdnlk asdlka sndn sandjsa asjdnasjk as jdna ajsd naskn jk nasd nasnd a n najksdn asnjka n adnskjdnaskjnd kajn skan jkans n kasnd aksn kn dasn djan dkasj n'

  return (
    <div>
      <Navbar
        nameLogo={'Sergio_Rodas'}
        contactPath={'#contact'}
        homePath={'#home'}
        dataNavbarLinks={dataNavbarLinks}
      />
      <Presentation
        titleJob={'FULL STACK DEVELOPER'}
        name={'Sergio Rodas Cruz'}
        description={description}
        textButton={'Download Curriculum in pdf'}
        imgPath={imgHome}
      />
      <About
        imgPath={imgSergio}
        githubPath={githubPath}
        linkedinPath={linkedinPath}
        email={email}
        nameProfile={'Sergio Rodas'}
        aboutTitle={'About'}
        aboutSubTitle={'Esto es un subtitulo donde ponder mas adelante'}
        aboutDescriptionPrimary={description}
        aboutDescriptionSecondary={description}
      />
      <Skills
        skillsTitle={'Skills'}
        infoCards={dataSkills}
      />
      <Service
        dataService={dataService}
        title={'Service'}
      />
      <Projects
        dataProjects={dataProjects}
        title={'Projects'}
      />
      <Contact
        title={'Contact'}
        description={description}
        email={email}
        githubPath={githubPath}
        linkedinPath={linkedinPath}
        whatsappNumber={'+ 591 691 528 11'}
      />
      <Footer
        footerTextPrimary={'© 2022 Portfolio Sergio Rodas'}
        footerTextSecond={'Design by '}
        footerAuthor={'Sergio Andres Rodas Cruz'}
        footerPath={'#home'}
      />
    </div>
  )
}

export default PageHome
