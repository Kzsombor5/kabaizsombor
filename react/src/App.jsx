import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Regiok from "./Regiok"
import Regisztracio from "./Regisztracio"
import Regisztracio2 from "./Regisztracio2"


function App() {
  

  return (    
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regiok" element={<Regiok />} />
          <Route path="/regisztracio" element={<Regisztracio />} />
          <Route path="/regisztracio2" element={<Regisztracio2 />} />
        </Routes>
      </BrowserRouter>
        
      </div>
          
  )
}

export default App
