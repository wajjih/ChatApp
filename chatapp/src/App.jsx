import axios from "axios"
import {UserContext, UserContextProvider } from './UserContext';
import Routes from './Routes';
import { useContext } from "react";


function App() {
  
  axios.defaults.baseURL = 'http://localhost:4000'
  axios.defaults.withCredentials = true;
  
  
  return (
    <UserContextProvider>
      <Routes/>
    </UserContextProvider>
  )
}

export default App
