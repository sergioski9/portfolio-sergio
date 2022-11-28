import { onClickDownloadCv } from './../../utils'
import './Presentation.css'

function PresentationInfo({ titleJob, name, description, textButton }) {
  return (
    <div className='presentation-container-info col-12 col-md-5'>
      <h3 className='presentation-title-job'>{titleJob}</h3>
      <h1 className='presentation-name'>{name}</h1>
      <p className='presentation-description'>
        {description}
      </p>
      <button
        className='presentation-button-download-cv'
        onClick={onClickDownloadCv}
      >
        {textButton}
      </button>
    </div>
  )
}

export default PresentationInfo
