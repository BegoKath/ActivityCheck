interface Props {
  faceCaptures: string[];
}

export const FaceRecognitionEditView = ({ faceCaptures }: Props) => {
  return (
    <>
      <div className="my-3 text-center">
        {faceCaptures.length === 0 && "Mire fijamente la pantalla"}
        <div>
          {faceCaptures.length > 0 ? (
            faceCaptures.length === 1 ? (
              "Gira la cabeza ligeramente hacia la derecha"
            ) : (
              faceCaptures.length === 2 &&
              "Ahora gira la cabeza ligeramente hacia la izquierda"
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
