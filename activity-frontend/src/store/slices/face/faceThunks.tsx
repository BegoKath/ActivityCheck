
import * as faceapi from "face-api.js";

import { Dispatch } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";
import { faceActions } from "./faceSlice";

const loadModels = (params: { session?: ITeacher, screen: string }): any =>
  async (dispatch: Dispatch, getState: any) => {
    const { session, screen } = params;

    try {  
      dispatch(faceActions.startLoading());

      await faceapi.nets.tinyFaceDetector.loadFromUri('./FaceApiModels');
      await faceapi.nets.faceLandmark68Net.loadFromUri('./FaceApiModels');
      await faceapi.nets.faceRecognitionNet.loadFromUri('./FaceApiModels');
      await faceapi.nets.faceExpressionNet.loadFromUri('./FaceApiModels');
      if ( screen === '/login') {
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
    //const res = await FacesService.loadFaces();
    dispatch(faceActions.stopLoading());
/*
    if (!res.correctProcess) {
      dispatch(faceActions.setError(res.message));
      return;
    }

    const facesData = res.data.map((e: IUserFaceInfo) => {
      let descriptors = [];
      if (e.clfFace1) descriptors.push(e.clfFace1);
      if (e.clfFace2) descriptors.push(e.clfFace2);
      if (e.clfFace3) descriptors.push(e.clfFace3);
      return {
        idUser: e.idCliente!,
        descriptors,
      };
    });

    dispatch(faceActions.setFaces(facesData));*/

  }
  const sendFace = (params: { faceCaptures: string[], idClient: number }): any =>
  async (dispatch: Dispatch) => {
    const { faceCaptures, idClient } = params;
    console.log(faceCaptures);
/*
    dispatch(faceActions.startLoading());
    const res = await FacesService.registerFaces({
      idClient,
      clfFace1: faceCaptures[0],
      clfFace2: faceCaptures[1],
      clfFace3: faceCaptures[2],
    });

    if (!res.correctProcess) {
      await MyAlert.showError(res.message);
      dispatch(faceActions.stopLoading());
      return;
    }

    await MyAlert.showSuccess({ message: res.message, timer: 2000 });
    dispatch(faceActions.setFaceUpdated());*/
  }


export const faceThunks = { loadFaces, loadModels, sendFace };