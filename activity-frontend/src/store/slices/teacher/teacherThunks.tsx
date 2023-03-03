import { Dispatch } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";
import { FacesService } from "../../../services/FaceService";
import { TeacherService } from "../../../services/TeacherService";
import { Alert } from "../../../utils/Alert";
import { appActions } from "../app/appSlice";
import { faceActions } from "../face/faceSlice";
import { teacherActions } from "./teacherSlice";

const getTeachers =():any => async(dispatch:Dispatch)=>{
    const teachers= await TeacherService.getTeachers();
    
    dispatch(teacherActions.setTeachers(teachers as ITeacher[]))
}
const setTeacher = (values:ITeacher, faceCaptures: string[]):any=>
async(dispatch:Dispatch)=>{
    const teacher = await TeacherService.setTeacher(values);
    if (teacher === "OK") {
        dispatch(faceActions.setCurrentIdUser(values.idTeacher));
        await FacesService.registerFace({
          idTeacher:teacher.idTeacher,
          clfFace1: faceCaptures[0],
          clfFace2: faceCaptures[1],
          clfFace3: faceCaptures[2],
        });
        dispatch(appActions.closeFaceRegister());
        await Alert.showSuccess({ message: "Exito", timer: 2000 });    
        dispatch(faceActions.setFaceUpdated());
        return true;
      } else {
        return false;
      }
}
const deleteTeacher =
  (idTeacher: number): any =>
  async () => {
    const res = await TeacherService.deleteTeacher(idTeacher);
    
    if(res==="OK"){
      return true;
    }else{
      return false;
    }
  };
export const teacherThunks={
    getTeachers,setTeacher,deleteTeacher
}