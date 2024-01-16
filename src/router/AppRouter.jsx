import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'

function AppRouter (){
  return (
    <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />

        <Route path='/*' element={ <Navigate to="/"/> } />
    </Routes>
  )
}

export default AppRouter
