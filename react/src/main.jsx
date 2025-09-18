import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from "./menu"
import App from './App.jsx' 
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <Menu/>    
    <App/>    
  </StrictMode>,
)
