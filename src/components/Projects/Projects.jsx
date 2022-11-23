import Wave from '../Wave'
import ProjectsCard from './ProjectsCard'
import './Projects.css'

function Projects({ dataProjects, title }) {
  return (
    <div className='projects-container' id='projects'>
      <Wave>
        <div className='projects-container-card row justify-content-center align-items-center'>
          <div className='col-12 projects-container-title text-center'>
            <h4 className='projects-title'>{title}</h4>
          </div>
          {
            dataProjects && dataProjects.map((data, index) => {
              return (
                <ProjectsCard
                  key={index + 1}
                  url={data.url}
                  imgPath={data.imgPath}
                  titleProjects={data.title}
                  descriptionProjects={data.description}
                />
              )
            })
          }
        </div>
      </Wave>
    </div>
  )
}

export default Projects
