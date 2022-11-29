import SkillsCard from './SkillsCard'
import { Marked } from './../../utils'
import './Skills.css'

function Skills({ skillsTitle, infoCards }) {
  return (
    <section className='skills-container text-center' id='skills'>
      <div className='skills-title'>
        <h4 className='skills-title-text'>
          <Marked /> {skillsTitle}
        </h4>
      </div>
      <div className='row justify-content-center align-items-center'>
        {
          infoCards && infoCards.map((data, index) => {
            return (
              <SkillsCard
                key={index + 1}
                title={data.title}
                imageUrl={data.imageUrl}
                level={data.level}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills
