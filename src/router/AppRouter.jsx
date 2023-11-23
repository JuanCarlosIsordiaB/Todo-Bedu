

import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../login/LoginPage';

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login  */}
        <Route path='login' element={ <LoginPage/>}/>

        <Route pat='/*' element={ <LoginPage/>}/>

    </Routes>
  )
}
