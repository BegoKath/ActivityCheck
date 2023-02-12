import { Route, Routes } from 'react-router-dom';
import { ActivitiesScreen } from '../screens/activities/ActivitiesScreen';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<RegisterScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='/activities' element={<ActivitiesScreen/>}/>
        </Routes>
    );
}