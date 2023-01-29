import { Route, Routes } from 'react-router-dom';
import { RegisterScreen } from '../screens/register/RegisterScreen';
export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<RegisterScreen/>}/>
        </Routes>
    );
}