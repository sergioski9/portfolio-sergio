import './Projects.css'

function ProjectsCard({ imgPath, titleProjects, descriptionProjects, url }) {
  return (
    <div
      onClick={() => window.open(url, '_blank')}
      className='projects-card col-12 col-md-4 col-lg-3'
    >
      <div className='projects-border-color'></div>
      <div className='projects-container-img'>
        <img
          className='projects-img'
          src={imgPath}
          alt="projects developer"
        />
      </div>
      <div className='projects-container-title'>
        <h6 className='projects-title'>{titleProjects}</h6>
      </div>
      <div className='projects-container-description'>
        <p className='projects-description'>{descriptionProjects}</p>
      </div>
    </div>
  )
}

export default ProjectsCard
