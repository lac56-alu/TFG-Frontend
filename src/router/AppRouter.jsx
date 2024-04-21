import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Profile from '../components/Profile/Profile'
import ModifyProfile from '../components/Profile/ModifyProfile'
import Rates from '../components/Rate/Rates'
import AdminPanel from '../components/Admin/AdminPanel'
import UserAdmin from '../components/Admin/UserAdmin'
import RateAdmin from '../components/Admin/RateAdmin'
import BookingsMain from '../components/Booking/BookingsMain'
import GymBooking from '../components/Booking/GymBooking'
import GymBookingAdmin from '../components/Admin/GymBookingAdmin'
import UserHistoricalGymBookings from '../components/Booking/UserHistoricalGymBookings'
import PadelBooking from '../components/Booking/PadelBooking'
import UserHistoricalPadelBookings from '../components/Booking/UserHistoricalPadelBookings'


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
        <Route path='/user-admin' element={ <UserAdmin /> } />
        <Route path='/rate-admin' element={ <RateAdmin /> } />
        <Route path='/booking' element={ <BookingsMain /> } />
        <Route path='/gym-booking' element={ <GymBooking /> } />
        <Route path='/gym-booking-admin' element={ <GymBookingAdmin /> } />
        <Route path='/my-historical-gym-bookings' element={ <UserHistoricalGymBookings /> } />
        <Route path='/padel-booking' element={ <PadelBooking /> } />
        <Route path='/my-historical-padel-bookings' element={ <UserHistoricalPadelBookings /> } />

        <Route path='/*' element={ <Navigate to="/"/> } />
    </Routes>
  )
}

export default AppRouter
