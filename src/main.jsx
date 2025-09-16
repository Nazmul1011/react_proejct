
import './index.css'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import App from './App.jsx'
import Home from './pages/home/home.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<div>Pricing</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/blog" element={<div>BlogPage</div>} />
      </Route>
      
    </Routes>
</BrowserRouter>, 
)
