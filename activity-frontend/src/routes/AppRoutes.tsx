import { Route, Routes } from 'react-router-dom';
import { ActivitiesScreen } from '../screens/activities/ActivitiesScreen';
import { AdminScreen } from '../screens/admin/AdminScreen';
import { FaceRecognitionScreen } from '../screens/face/FaceRecognitionScreen';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<ActivitiesScreen/>}/>
            <Route  path='/register' element={<RegisterScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/activities' element={<ActivitiesScreen/>}/>
            <Route path='/admin' element= {<AdminScreen/>}/>
            <Route path='face' element= {<FaceRecognitionScreen/>}/>
        </Routes>
    );
}