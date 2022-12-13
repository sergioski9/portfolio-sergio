import { categoryLevel, BorderLinearProgress } from './../../utils'
import './Skills.css'

function SkillsCard({ title, imageUrl, level }) {
  return (
    <div className='col-12 col-md-4 col-lg-3 skills-card-container'>
      <div>
        <h6 className='skills-card-title-text'>
          {title}
        </h6>
      </div>
      <div className='skills-card-container-image'>
        <img
          className='skills-card-image'
          src={imageUrl}
          alt="skills"
        />
      </div>
      <div className='skills-card-container-level'>
        <div className='skills-card-level'>
          <BorderLinearProgress variant="determinate" value={level} />
          <p className='skills-card-level-text'>
            {level} % {categoryLevel(level)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkillsCard
