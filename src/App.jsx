import  React,{ useState, createContext } from 'react'
import Header from "./assets/Components/Header"
import "./App.css"
import { Outlet } from "react-router-dom"



export const StateContext = createContext();
function App() {
  const [formData, setFormData] = useState([
    
  ])
  return(
    <div>
      <StateContext.Provider value={{formData, setFormData}} >
      <Header/>
      <Outlet />
      </StateContext.Provider>
    </div>
  )
}

export default App
