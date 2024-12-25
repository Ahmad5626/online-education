import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './component/assets/css/style.css';
import './component/assets/css/all.min.css';
import './component/assets/css/magnific-popup.min.css';
// import './component/assets/css/aos.css';
import './component/assets/css/bootstrap.min.css';
import './component/assets/css/swiper-bundle.min.css';
import './component/assets/css/animate.min.css';
import './component/assets/css/responsive.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Details from './pages/Details/Details';

// js

import './component/assets/js/bootstrap.bundle.min.js';
// import './component/js/';
function App() {
  return (
 <>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>
 </>
  );
}

export default App;
