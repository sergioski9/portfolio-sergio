import './Presentation.css'

function PresentationInfo({ titleJob, name, description, textButton }) {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className='presentation-container-info col-12 col-md-5'>
      <h3 className='presentation-title-job'>{titleJob}</h3>
      <h1 className='presentation-name'>{name}</h1>
      <p className='presentation-description'>
        {description}
      </p>
      <button
        className='presentation-button-download-cv'
        onClick={onButtonClick}
      >
        {textButton}
      </button>
    </div>
  )
}

export default PresentationInfo
