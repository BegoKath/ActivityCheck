import { Dispatch } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";
import { TeacherService } from "../../../services/TeacherService";

const getTeachers =():any => async(dispatch:Dispatch)=>{
    const teacher= await TeacherService.getTeachers();
    console.log(teacher);
}
const setTeacher = (values:ITeacher):any=>async()=>{
    const teacher =await TeacherService.setTeacher(values);
    console.log(teacher);
}
export const teacherThunks={
    getTeachers,setTeacher
}