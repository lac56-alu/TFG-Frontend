import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login/Login'
import LogOut from '../components/Login/Login'
import Register from '../components/Register/Register'

function AppRouter (){
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />

        <Route path='/*' element={ <Navigate to="/"/> } />
    </Routes>
  )
}

export default AppRouter
