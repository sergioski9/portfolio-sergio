import './About.css'

function AboutSocialIcon({ onClick, children }) {
  return (
    <div className='d-inline-block mx-2'>
      <button
        onClick={() => onClick()}
        className='about-button-social'
      >
        {children}
      </button>
    </div>
  )
}

function AboutSocialImage({ imgPath }) {
  return (
    <div className='d-inline-block about-border-profile'>
      <img
        className='about-image-profile'
        src={imgPath}
        alt="developer-profile"
      />
    </div>
  )
}

export { AboutSocialIcon, AboutSocialImage }
