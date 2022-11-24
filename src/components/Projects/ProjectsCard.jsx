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
          className='projects-card-img'
          src={imgPath}
          alt="Projects developer"
        />
      </div>
      <div className='projects-container-title'>
        <h6 className='projects-card-title'>{titleProjects}</h6>
      </div>
      <div className='projects-container-description'>
        <p className='projects-card-description'>{descriptionProjects}</p>
      </div>
    </div>
  )
}

export default ProjectsCard
