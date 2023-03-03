
import * as faceapi from "face-api.js";

import { Dispatch } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";
import { faceActions, IFaceState } from "./faceSlice";
import { FacesService } from "../../../services/FaceService";
import { IUserFaceInfo } from "../../../interfaces/IUserFaceInfo";
// import { Alert } from "../../../utils/Alert";
// import { appActions } from "../app/appSlice";
// import { useTeacher } from "../../../hooks/useTeacher";
// import { teacherThunks } from "../teacher/teacherThunks";


const loadModels = (params: { session?: ITeacher, screen: string }): any =>
  async (dispatch: Dispatch, getState: any) => {
    const { session, screen } = params;

    try {  
      const { currentIdUser } = getState().face as IFaceState;
      dispatch(faceActions.startLoading());

      await faceapi.nets.tinyFaceDetector.loadFromUri('./FaceApiModels');
      await faceapi.nets.faceLandmark68Net.loadFromUri('./FaceApiModels');
      await faceapi.nets.faceRecognitionNet.loadFromUri('./FaceApiModels');
      await faceapi.nets.faceExpressionNet.loadFromUri('./FaceApiModels');
      if ( (!currentIdUser && !session) || screen === '/login') {
        dispatch(faceThunks.loadFaces());
      } else {
        dispatch(faceActions.stopLoading());
        dispatch(faceActions.clearAllUserFaces());
      }

    } catch (err) {
      dispatch(faceActions.setError(`${err}`));
    }
  }
  const loadFaces = (): any =>
  async (dispatch: Dispatch) => {

    dispatch(faceActions.startLoading());
    const res = await FacesService.loadFaces();    

    const facesData = res.map((e: IUserFaceInfo) => {
      let descriptors = [];
      if (e.clfFace1) descriptors.push(e.clfFace1);
      if (e.clfFace2) descriptors.push(e.clfFace2);
      if (e.clfFace3) descriptors.push(e.clfFace3);
      return {
        idUser: e!.idTeacher,
        descriptors,
      };
    });
    
    dispatch(faceActions.setFaces(facesData));
    dispatch(faceActions.stopLoading());
  }
  // const sendFace = (params: { faceCaptures: string[], teacher:  }): any =>
  // async (dispatch: Dispatch, getState: any) => {
  //   const { faceCaptures } = params;
  //   const {teacher}= getState().teacher;
  //   dispatch(faceActions.startLoading());
  //   if(!teacher) {
  //     await Alert.showError("No hay datos del Docente");
  //     return;
  //   }
  //   dispatch(teacherThunks.setTeacher(teacher, faceCaptures));
    
  // }


export const faceThunks = {
   loadFaces, 
   loadModels, 
  //  sendFace,
  };