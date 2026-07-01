import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import UserDashboard from './pages/dashboard/userDashboard';

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
  <Route path='/user/dashboard' element={<UserDashboard/>}></Route>
</Routes>
<Footer/>

</BrowserRouter>
  )
}

export default App;