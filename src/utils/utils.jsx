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

export { Marked, categoryLevel, BorderLinearProgress }
