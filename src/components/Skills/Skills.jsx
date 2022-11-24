import SkillsCard from './SkillsCard'
import { Marked } from './../../utils'
import './Skills.css'

function Skills({ skillsTitle, infoCards }) {
  return (
    <div className='skills-container text-center' id='skills'>
      <div className='skills-title'>
        <h4 className='skills-title-text'>
          <Marked /> {skillsTitle}
        </h4>
      </div>
      <SkillsCard infoCards={infoCards} />
    </div>
  )
}

export default Skills
