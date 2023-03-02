import { useState } from "react";
import { RenderIf } from "../../../utils/RenderIf";


interface Props {
  faceCaptures: string[];
  startEditMode: () => void,
}

export const FaceRecognitionEditView = ({ faceCaptures, startEditMode }: Props) => {

  const [editButtonEnable, setEditButtonEnable] = useState(true);


  const handleStartButton = () => {
    setEditButtonEnable(false);
    startEditMode();
  }

  return (
    <>
      <div className="my-3 text-center">
        {
          faceCaptures.length === 0
          && 'Mire fijamente la pantalla y cuando esté listo presione el botón azul'
        }
        <div>
          {
            faceCaptures.length > 0
              ? faceCaptures.length === 1
                ? 'Gira la cabeza ligeramente hacia la derecha'
                : faceCaptures.length === 2 && 'Ahora gira la cabeza ligeramente hacia la izquierda'
              : <></>
          }
        </div>
      </div>
      <RenderIf condition={editButtonEnable}>
        <div className='my-2'>
          <button
            className='btn btn-primary'
            onClick={handleStartButton}
          >
            Empezar reconocimiento
          </button>
        </div>
      </RenderIf>
    </>
  )
}
