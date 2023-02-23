import { Dispatch } from "@reduxjs/toolkit"
import { ISubject } from "../../../interfaces/ISubject";
import { SubjectService } from "../../../services/SubjectService"
import { activitiesActions } from "./activitiesSlice";


const getSubject= ():any => async (dispatch: Dispatch) => {
    const subjects = await SubjectService.getSubjects();
    console.log(subjects);
    dispatch(activitiesActions.setSubjects(subjects as ISubject[]));
}



export const activitiesThunks ={
getSubject
}