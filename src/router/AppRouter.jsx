import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Profile from '../components/Profile/Profile'
import ModifyProfile from '../components/Profile/ModifyProfile'
import Rates from '../components/Rate/Rates'
import AdminPanel from '../components/Admin/AdminPanel'

function AppRouter (){
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/modify-profile' element={ <ModifyProfile /> } />
        <Route path='/rates' element={ <Rates /> } />
        <Route path='/adminpanel' element={ <AdminPanel /> } />

        <Route path='/*' element={ <Navigate to="/"/> } />
    </Routes>
  )
}

export default AppRouter
