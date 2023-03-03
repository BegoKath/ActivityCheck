import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { FaceRecognitionScreen } from "../../face/FaceRecognitionScreen";
import { useApp } from "../../../hooks/useApp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { teacherActions } from "../../../store/slices/teacher/teacherSlice";
import { useTeacher } from "../../../hooks/useTeacher";
import { activitiesActions } from "../../../store/slices/activities/activitiesSlice";
import { faceActions } from "../../../store/slices/face/faceSlice";

export const FaceRegisterDialog = () => {
  const dispatch = useDispatch();
  const {
    state: { showFaceRegisterDialog },
    closeFaceRegister,
  } = useApp();
  const {
    state: { selectedTeacher },
  } = useTeacher();

  useEffect(() => {
    if (!showFaceRegisterDialog) {
      dispatch(teacherActions.clearSelectedTeacher());
      dispatch(activitiesActions.clearSelectedTeacher());
      dispatch(faceActions.clearfaceActivitySet());
    }
  }, [dispatch, showFaceRegisterDialog]);

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
          {selectedTeacher ? "Reconocimiento" : "Registro de la cara"}
          <IconButton
            aria-label="close"
            onClick={closeFaceRegister}
            sx={{
              position: "absolute",
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
  );
};
