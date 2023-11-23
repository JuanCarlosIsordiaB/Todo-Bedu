

import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from '../login/LoginPage';
import { TodoApp } from '../08-useReducer/TodoApp';

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login  */}
        <Route path='login' element={ <LoginPage/>}/>
        <Route path='todo' element={ <TodoApp/>}/>

        <Route pat='/*' element={ <Navigate to='/login'/>}/>

    </Routes>
  )
}
