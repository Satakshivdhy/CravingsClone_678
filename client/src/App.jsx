import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import CustomerDashboard from './pages/dashboard/CustomerDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import RestaurantDashboard from './pages/dashboard/RestaurantDashboard';
import RiderDashboard from './pages/dashboard/RiderDashboard';

const App = () => {
  return (
<BrowserRouter>
<Toaster/>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/> }/>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/register" element={<Register/>}></Route>
  <Route path="/contact" element={<ContactUs/> }></Route>

  {/* Dashboard routes */}
  <Route path='/customer-dashboard' element={<CustomerDashboard/>}></Route>
  <Route path='/admin-dashboard' element={<AdminDashboard/>}></Route>
  <Route path='/restaurant-dashboard' element={<RestaurantDashboard/>}></Route>
  <Route path='/rider-dashboard' element={<RiderDashboard/>}></Route>
</Routes>
<Footer/>

</BrowserRouter>
  )
}

export default App;