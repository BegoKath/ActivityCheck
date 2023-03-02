import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';
import { FaceRecognitionScreen } from '../../face/FaceRecognitionScreen';
import { useApp } from '../../../hooks/useApp';

export const FaceRegisterDialog = () => {

  const { state: { showFaceRegisterDialog }, closeFaceRegister } = useApp();

  return (
    <Dialog
      open={showFaceRegisterDialog}
      onClose={closeFaceRegister}
      fullWidth
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        <>
        Registro de la cara
          <IconButton
            aria-label="close"
            onClick={closeFaceRegister}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </>
      </DialogTitle>
      <DialogContent>
        <FaceRecognitionScreen />
      </DialogContent>
    </Dialog>
  )
}