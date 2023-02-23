import { useDispatch, useSelector } from "react-redux";
import { IActivitiesState } from "../store/slices/activities/activitiesSlice"
import { activitiesThunks } from "../store/slices/activities/activitiesThunks";

export const useActivities = ()=>{
    const state = useSelector((state:any)=>state.activities) as IActivitiesState;
    const dispatch = useDispatch();

    const getSubject = ()=> dispatch(activitiesThunks.getSubject());
    return{
        state,
        getSubject
    }
}