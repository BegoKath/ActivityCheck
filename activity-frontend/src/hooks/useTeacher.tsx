import { useDispatch, useSelector } from "react-redux"
import { ITeacherState } from "../store/slices/teacher/teacherSlice"
import { teacherThunks } from "../store/slices/teacher/teacherThunks";

export const useTeacher =()=>{
    const state = useSelector((state:any)=>state.teacher) as ITeacherState;
    const dispatch = useDispatch();

    const getTeachers =()=> dispatch(teacherThunks.getTeachers());
    return {
        state,
        getTeachers
    }
};