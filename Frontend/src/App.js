
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from './Component/SignUp';
import OtpVerify1 from './Component/OtpVerify1';
import PrivateComponent from "./Component/PrivateComponent";
import Profile from './Component/Profile';
import Dashboard from './Component/Dashboard';
import Addition from './Component/Addition';
import Footer from './Component/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PrivateComponent />} >
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/add' element={<Addition />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/otpverify1' element={<OtpVerify1 />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
