import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import './utils.css'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    // Change the value (true) the operation ternary for the color in the progress bar
    backgroundColor: theme.palette.mode === 'light' ? 'var(--color-primary)' : '#308fe8',
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
  if (text.length > 24) {
    const result = text.slice(0, 22) + '...'
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

const onClickDownloadCv = () => {
  fetch('CV.pdf').then(response => {
    response.blob().then(blob => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'CV.pdf';
      alink.click();
    })
  })
}

const changeBackground = (setShowNavbarBg) => {
  if (window.scrollY >= 66) {
    setShowNavbarBg(true)
  } else {
    setShowNavbarBg(false)
  }
}

const navbarScrollBorder = (selector1, selector2) => {
  const sections = document.querySelectorAll(selector1)
  const navLinks = document.querySelectorAll(selector2)

  window.onscroll = () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (window.scrollY >= sectionTop - 60) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((li) => {
      li.classList.remove("active")
      if (li.classList.contains(current)) {
        li.classList.add("active")
      }
    })
  }
}

export {
  Marked, categoryLevel, BorderLinearProgress, verifyLenghtText, onClickDownloadCv,
  effectSmoothieScroll, changeBackground, navbarScrollBorder
}
