import './Wave.css'

function Wave({children}) {
  return (
    <div className='wave-background'>
      {children}
    </div>
  )
}

export default Wave
