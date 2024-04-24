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
import PadelBookingAdmin from '../components/Admin/PadelBookingAdmin'
import Schedule from '../components/Schedule/Schedule'
import axios from 'axios'
import { useState, useEffect } from 'react'


function AppRouter (){
  const checkAdmin = async () => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        const url = 'http://localhost:8082/tfg/users/userType/';
        const urlCompleta = url + token;
        const urlSinComillas = urlCompleta.replace(/"/g, '');
        const response = await axios.get(urlSinComillas);
        return response.data.comprobar;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getAdminState = async (checkType) => {
    try {
      // Realiza la comprobación según el tipo especificado
      // Por ejemplo, 'admin' para verificar si es administrador
      // Otros valores podrían ser 'login', 'registro', etc.
      if (checkType === 'admin') {
        const isAdmin = await checkAdmin();
        return isAdmin;
      }
      // Agrega otros casos según sea necesario
    
      return false; // Si no se proporciona un tipo válido, devuelve false
    } catch (error) {
      console.error('Error al verificar el estado:', error);
      return false;
    }
  };
  
  // Componente funcional para manejar las rutas
  const RouteHandler = ({ checkType, adminComponent, nonAdminComponent }) => {
    const [isAdmin, setIsAdmin] = useState(null); // Estado para almacenar si es administrador o no
  
    useEffect(() => {
      const fetchData = async () => {
        const adminState = await getAdminState(checkType); // Obtenemos el estado según el tipo especificado
        setIsAdmin(adminState); // Actualizamos el estado
      };
  
      fetchData(); // Llamamos a la función asincrónica
    }, [checkType]);
  
    // Renderizamos el componente correspondiente según el estado de isAdmin
    return isAdmin === null ? null : isAdmin ? adminComponent : nonAdminComponent;
  };

  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/profile' element={ <Profile /> } />
      <Route path='/modify-profile' element={ <ModifyProfile /> } />
      <Route path='/rates' element={ <Rates /> } />

      <Route
        path="/adminpanel"
        element={
          <RouteHandler
            checkType="admin"
            adminComponent={<AdminPanel />}
            nonAdminComponent={<Home />}
          />
        }
      />
      <Route
        path="/user-admin"
        element={
          <RouteHandler
            checkType="admin"
            adminComponent={<UserAdmin />}
            nonAdminComponent={<Home />}
          />
        }
      />
      <Route
        path="/rate-admin"
        element={
          <RouteHandler
            checkType="admin"
            adminComponent={<RateAdmin />}
            nonAdminComponent={<Home />}
          />
        }
      />
      <Route
        path="/gym-booking-admin"
        element={
          <RouteHandler
            checkType="admin"
            adminComponent={<GymBookingAdmin />}
            nonAdminComponent={<Home />}
          />
        }
      />
      <Route path='/booking' element={ <BookingsMain /> } />
      <Route path='/gym-booking' element={ <GymBooking /> } />
      <Route path='/my-historical-gym-bookings' element={ <UserHistoricalGymBookings /> } />
      <Route path='/padel-booking' element={ <PadelBooking /> } />
      <Route path='/my-historical-padel-bookings' element={ <UserHistoricalPadelBookings /> } />
      <Route
        path="/padel-booking-admin"
        element={
          <RouteHandler
            checkType="admin"
            adminComponent={<PadelBookingAdmin />}
            nonAdminComponent={<Home />}
          />
        }
      />
      <Route path='/schedule' element={ <Schedule /> } />

      <Route path='/*' element={ <Navigate to="/"/> } />
    </Routes>
  )
}

export default AppRouter
