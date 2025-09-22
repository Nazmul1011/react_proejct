
import './index.css'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.jsx'
import Home from './pages/home/home.jsx';
import Help from './pages/help/Help.jsx';

// import Pricing from './pages/Pricing.jsx';
import About from './pages/Aboutus/About.jsx';
import ContactUs from './pages/Pricing.jsx';

// import { Help } from './pages/help/help.jsx';


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home/>} />
        <Route path="/feature" element={<div>Feature</div>} />
         <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<About/>} />
        <Route path="/help" element={<Help/>}/>
      </Route>
      
    </Routes>
</BrowserRouter>, 
)

