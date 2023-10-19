import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useFace } from "../../hooks/useFace";
import { Loading } from "../../utils/Loading";
import { RenderIf } from "../../utils/RenderIf";
import { ErrorOptions } from "./components/ErrorOptions";
import { FaceRecognitionEditView } from "./components/FaceRecognitionEditView";
import { FaceRecognitionLoginView } from "./components/FaceRecognitionLoginView";

export const FaceRecognitionScreen = () => {
  const canvasFaceRef: any = useRef();
  const webcamRef: any = useRef();
  const width = 720;
  const height = 400;
  const { pathname } = useLocation();
  const {
    state: { faceCapture, error, authMode, loading, neutralExpression },
    loadModels,
  } = useFace({ canvasFaceRef, webcamRef, height, width });

  return (
    <div
      className={`
        d-flex flex-column container align-items-center justify-content-center 
        ${pathname !== "/register" && pathname !== "/login" && "h-full"}
        `}
    >
      <RenderIf condition={!loading} elseChildren={<Loading />}>
        <RenderIf
          condition={error === undefined}
          elseChildren={<ErrorOptions error={error!} loadModels={loadModels} />}
        >
          <div className="d-flex rounded-lg overflow-hidden bg-black">
            <video
              ref={webcamRef}
              width={width}
              height={height}
              autoPlay
              muted
              style={{ objectFit: "cover" }}
            />
            <canvas
              ref={canvasFaceRef}
              className="position-absolute"
              width={width}
              height={height}
            />
          </div>
          <RenderIf
            condition={!authMode}
            elseChildren={
              <FaceRecognitionLoginView neutralExpression={neutralExpression} />
            }
          >
            <FaceRecognitionEditView faceCaptures={faceCapture} />
          </RenderIf>
        </RenderIf>
      </RenderIf>
    </div>
  );
};
