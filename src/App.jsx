import Header from "./components/Header"
import './App.css'
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Assistance from "./pages/Assistance"
import Rss from "./pages/Rss"

function App() {
  
  

  return (
    <>      
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path='/assistance' element={<Assistance/>} />       
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
