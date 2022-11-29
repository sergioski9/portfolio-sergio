import PresentationInfo from './PresentationInfo'
import './Presentation.css'

function Presentation({ titleJob, name, description, textButton, imgPath }) {
  return (
    <section
      className='presentation-container row justify-content-between'
      id='presentation'
    >
      <PresentationInfo
        titleJob={titleJob}
        name={name}
        description={description}
        textButton={textButton}
      />
      <div className='col-12 col-md-5'>
        <img
          className='presentation-image'
          src={imgPath}
          alt="developer"
        />
      </div>
    </section>
  )
}

export default Presentation
