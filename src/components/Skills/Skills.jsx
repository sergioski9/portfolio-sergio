import './Skills.css'

function Skills({ skillsTitle, infoCards }) {
  return (
    <div className='skills-container'>
      <div className='skills-title'>
        <h4 className='skills-title-text'>{skillsTitle}</h4>
      </div>
      <div className='skills-card-container'>
        <div className='skills-card-title'>
          <h6 className='skills-card-title-text'>
            CSS
          </h6>
        </div>
        <div className='skills-card-container-image'>
          <img
            className='skills-card-image'
            src="https://p.kindpng.com/picc/s/112-1127970_hire-developers-hd-png-download.png"
            alt="skills"
          />
        </div>
        <div className='skills-card-container-level'>
          <div className='skills-card-level'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
