import * as faceapi from "face-api.js";
import { FaceExpressions } from "face-api.js";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { faceActions, IFaceState } from "../store/slices/face/faceSlice";
import { faceThunks } from "../store/slices/face/faceThunks";
import { teacherThunks } from "../store/slices/teacher/teacherThunks";
import { store } from "../store/store";
import { Alert } from "../utils/Alert";
import { useAuth } from "./useAuth";

export const useFace = (props: {
  canvasFaceRef: any;
  webcamRef: any;
  width: number;
  height: number;
}) => {
  const { canvasFaceRef, webcamRef, width, height } = props;
  const state = useSelector((state: any) => state.face) as IFaceState;
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { faceCapture, authMode, userFounded, currentIdUser, faceUpdated } =
    state;
  const {
    state: { teacher },
    logInWithId,
  } = useAuth();
  let notFoundCounter = 0;
  let counter = 0;

  let detection: any;

  useEffect(() => {
    loadModels();
    setTimeout(() => {
      startCamera();
    }, 1000);
    return () => {
      dispatch(faceActions.resetState());
      stopCamera();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (authMode !== undefined) {
      handlePlay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authMode]);
  useEffect(() => {
    if (faceCapture.length >= 3) {
      sendFaceToServer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faceCapture]);
  useEffect(() => {
    if (faceUpdated) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [faceUpdated]);
  useEffect(() => {
    if (userFounded) {
      if (!teacher) {
        logInWithId(userFounded);
      } else if (userFounded === teacher.idTeacher) {
        if (pathname === "/login") {
          navigate("/");
        } else {
        }
      }
    }
  }, [logInWithId, navigate, pathname, teacher, userFounded]);

  const loadModels = () =>
    dispatch(faceThunks.loadModels({ session: teacher, screen: pathname }));

  let stream: any;
  const startCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      const cameras = await navigator.mediaDevices.enumerateDevices();
      const selectedCamera = cameras.find(
        (e) =>
          e.kind === "videoinput" && !e.label.toLowerCase().includes("zebra")
      );
      if (selectedCamera) {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: {
              exact: selectedCamera.deviceId,
            },
          },
        });
      } else {
        stream = await navigator.mediaDevices.getUserMedia({ video: {} });
      }
      let webcam = webcamRef.current;
      if (!webcam) return;
      webcam.srcObject = stream;
    } catch (error) {
      dispatch(faceActions.setError(`${error}`));
    }
  };

  const stopCamera = () => {
    if (stream === undefined) return;
    stream.getTracks().forEach((track: any) => {
      track.stop();
    });
  };
  const handlePlay = async () => {
    if (!webcamRef.current) {
      setTimeout(() => handlePlay(), 1000);
      return;
    }
    counter++;
    startRecognizing(webcamRef.current);
    setTimeout(() => handlePlay(), 1000);
  };
  const loadLabelFaces = () => {
    const { allTeacherFaces: faces } = state;
    return faces
      .map((faceData) => {
        const descriptors = faceData.descriptors.map(
          (e) => new Float32Array(JSON.parse(e))
        );
        return new faceapi.LabeledFaceDescriptors(
          `${faceData.idUser}`,
          descriptors
        );
      })
      .filter((e) => e);
  };

  const getMatchingUserId = (): number | undefined => {
    if (loadLabelFaces().length > 0) {
      const faceMatcher = new faceapi.FaceMatcher(loadLabelFaces(), 0.9);
      const result = faceMatcher.findBestMatch(detection.descriptor);
      if (result.distance < 0.4) {
        return Number(result.label);
      }
    }
  };
  const handleFaceNotFound = async () => {
    await Alert.showError("Lo sentimos, no hemos podido reconocerte", {
      title: "Usuario no encontrado",
      timer: 5,
    });
    notFoundCounter = 0;
  };
  const clearFaceDraw = () => {
    if (canvasFaceRef.current) {
      const context = canvasFaceRef.current.getContext("2d");
      context.clearRect(
        0,
        0,
        canvasFaceRef.current.width,
        canvasFaceRef.current.height
      );
    }
  };
  const startRecognizing = async (image: any) => {
    if (!image) return;

    detection = await faceapi
      .detectSingleFace(image, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptor()
      .withFaceExpressions();
    if (detection) {
      drawDetections(detection, image);

      const idUser = getMatchingUserId();
      //Trae el idUser de la persona que reconoció
      if (idUser) {
        // const {selectedTeacher} = store.getState().teacher;
        // if (idUser === selectedTeacher) {
        //  registrar lo que tengas que hacer
        // } else {  }

        notFoundCounter = 0;

        const currentExpressions = detection.expressions as FaceExpressions;
        const lastExpression = store.getState().face.neutralExpression;

        if (!lastExpression && currentExpressions.neutral > 0.9) {
          dispatch(faceActions.setNeutralExpression());
          return;
        }

        if (lastExpression && currentExpressions.happy > 0.9) {
          dispatch(faceActions.setUserFounded(idUser));
        }
      } else if (
        authMode === true &&
        store.getState().face.userFounded === undefined
      ) {
        notFoundCounter += 1;
        if (notFoundCounter === 10) {
          handleFaceNotFound();
        }
      } else if (faceCapture.length < 3 && counter % 3 === 0) {
        console.log("Toma foto");
        saveFace();
      } else if (faceCapture.length === 3) {
        console.log("Guarda fotos");
        sendFaceToServer();
      }
    } else {
      clearFaceDraw();
    }
  };
  const drawDetections = (
    detection: faceapi.WithFaceDescriptor<
      faceapi.WithFaceLandmarks<
        { detection: faceapi.FaceDetection },
        faceapi.FaceLandmarks68
      >
    >,
    image: any
  ) => {
    if (image && canvasFaceRef.current) {
      canvasFaceRef.current.innerHtml = faceapi.createCanvas(image);
      faceapi.matchDimensions(canvasFaceRef.current, { width, height });
      const resizedDetection = faceapi.resizeResults(detection.detection, {
        width,
        height,
      });

      const drawOptions = {
        lineWidth: 2,
        boxColor: "#37DE25",
      };
      const drawBox = new faceapi.draw.DrawBox(
        resizedDetection.box,
        drawOptions
      );
      drawBox.draw(canvasFaceRef.current);
    }
  };
  const saveFace = () => {
    if (!detection) {
      return;
    }
    const original = detection.descriptor;

    const jsonDescriptor = JSON.stringify(Array.from(original));

    dispatch(faceActions.saveCapture(jsonDescriptor));
  };

  const sendFaceToServer = () => {
    if (!currentIdUser) {
      Alert.showError("No hay ningun ID de docente");
      return;
    }
    const { teacher } = store.getState().teacher;
    if (!teacher) {
      throw new Error("No hay teacher");
    }
    dispatch(teacherThunks.setTeacher(teacher, faceCapture));
  };

  return {
    state,
    loadModels,
  };
};
