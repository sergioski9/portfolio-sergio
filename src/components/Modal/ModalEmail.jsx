import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { GrStatusGood } from 'react-icons/gr'
import './Modal.css'

function ModalEmail({ open, handleClose, email, title }) {
  return (
    <div className='about-social-clipboard-message'>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <GrStatusGood
            size={'2rem'}
            className='alert-dialog-icon-custom'
          />
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {email}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ModalEmail
