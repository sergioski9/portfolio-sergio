import './utils.css'
import { styled } from '@mui/material/styles'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#FF731F' : '#308fe8',
  },
}))

function Marked() {
  return (
    <div className='d-inline-block utils-border-marked'>
      <div className='utils-background-marked'></div>
    </div>
  )
}

const categoryLevel = (level) => {
  if (level >= 60 && level < 70) return 'Essential'
  if (level >= 70 && level < 80) return 'Intermediate'
  if (level >= 80 && level <= 100) return 'Advanced'
  if (level < 60 ) return 'Basic'
}

const verifyLenghtText = (text) => {
  if (text.length > 38) {
    const result = text.slice(0, 38) + '...'
    return result
  } else {
    return text
  }
}

const effectSmoothieScroll = (selector) => {
  const links = document.querySelectorAll(selector);

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    })
  }
}

export {
  Marked, categoryLevel, BorderLinearProgress, verifyLenghtText,
  effectSmoothieScroll
}
