import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import About from './components/About'
import imgHome from './media/images/developer.png'
import imgSergio from './media/images/sergio.jpeg'
import './App.css'

function App() {
  const description = 'Hi, aksjdo iasnd ioasoi dnoais ndion asiodni asndioasnd asndasda asdasda asdasdl asnlakl sdnlk asdlka sndn sandjsa asjdnasjk as jdna ajsd naskn jk nasd nasnd a n najksdn asnjka n adnskjdnaskjnd kajn skan jkans n kasnd aksn kn dasn djan dkasj n'

  return (
    <div className="App">
      <Navbar
        nameLogo={'Sergio_Rodas'}
        aboutPath={'#about'}
        skillsPath={'#skills'}
        servicePath={'#service'}
        projectsPath={'#projects'}
        contactPath={'#contact'}
        homePath={'#home'}
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
      />
    </div>
  )
}

export default App
