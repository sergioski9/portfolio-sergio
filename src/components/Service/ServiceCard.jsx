import './Service.css'

function ServiceCard({ imgPath, title, description, path }) {
  return (
    <div className='service-card col-12 col-md-4 col-lg-4'>
      <div className='service-container-img'>
        <img
          className='service-card-img'
          src={imgPath}
          alt="Service developer"
        />
      </div>
      <div className='service-container-title'>
        <h4
          onClick={() => window.location.href = path}
          className='service-card-title'
        >
          {title}
        </h4>
      </div>
      <div className='service-container-description'>
        <p className='service-card-description'>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
