import { Dispatch } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";
import { TeacherService } from "../../../services/TeacherService";
import { teacherActions } from "./teacherSlice";

const getTeachers =():any => async(dispatch:Dispatch)=>{
    const teachers= await TeacherService.getTeachers();
    
    dispatch(teacherActions.setTeachers(teachers as ITeacher[]))
}
const setTeacher = (values:ITeacher):any=>async()=>{
    const teacher =await TeacherService.setTeacher(values);
    if (teacher === "OK") {
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