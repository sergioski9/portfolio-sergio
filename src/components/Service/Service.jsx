import ServiceCard from './ServiceCard'
import { Marked } from './../../utils'
import './Service.css'

function Service({ dataService, title }) {
  return (
    <section className='service-container text-center' id='service'>
      <div className='service-container-title'>
        <h4 className='service-title'>
          <Marked /> {title}
        </h4>
      </div>
      <div className='service-container-card row justify-content-center'>
        {
          dataService && dataService.map((data, index) => {
            return (
              <ServiceCard
                key={index + 1}
                path={data.path}
                imgPath={data.imgPath}
                title={data.title}
                description={data.description}
              />
            )
          })
        }
      </div>
    </section>
  )
}

export default Service
