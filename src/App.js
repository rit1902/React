import React from "react";
import "./App.css";
import Navbar from './components/navbar.jsx';
import LoginSignUp from "./components/LoginSignUp.jsx";
import AboutPage from "./components/about.jsx";
import ContactPage from "./components/contact.jsx";
import BookAppointmentForm from "./components/bookappointment.jsx";
import ThankYouPage from "./components/thankappo.jsx";
import HealthCheckupForm from "./components/health.jsx";
import ThankYouPageH from "./components/thankhealth.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/bookappointment' element={<BookAppointmentForm/>}/>
        <Route path='/bookappthank' element={<ThankYouPage/>}/>
        <Route path='/healthcheck' element={<HealthCheckupForm/>}/>
        <Route path='/healthcheckt' element={<ThankYouPageH/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;