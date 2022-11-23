import { categoryLevel, BorderLinearProgress } from './../../utils';
import './Skills.css'

function SkillsCard({ infoCards }) {
  return (
    <div className='row justify-content-center align-items-center'>
        {
          infoCards && infoCards.map((infoCard, index) => {
            return (
              <div key={index} className='col-12 col-md-4 col-lg-3 skills-card-container'>
                <div>
                  <h6 className='skills-card-title-text'>
                    {infoCard.title}
                  </h6>
                </div>
                <div className='skills-card-container-image'>
                  <img
                    className='skills-card-image'
                    src={infoCard.imageUrl}
                    alt="skills"
                  />
                </div>
                <div className='skills-card-container-level'>
                  <div className='skills-card-level'>
                    <BorderLinearProgress variant="determinate" value={infoCard.level} />
                    <p className='skills-card-level-text'>
                      {infoCard.level} % {categoryLevel(infoCard.level)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
  );
}

export default SkillsCard
