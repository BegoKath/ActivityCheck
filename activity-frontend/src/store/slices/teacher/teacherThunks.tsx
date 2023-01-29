import { Dispatch } from "@reduxjs/toolkit";
import { TeacherService } from "../../../services/TeacherService";

const getTeachers =():any => async(dispatch:Dispatch)=>{
    const teacher= await TeacherService.getTeachers();
    console.log(teacher);
}
export const teacherThunks={
    getTeachers
}