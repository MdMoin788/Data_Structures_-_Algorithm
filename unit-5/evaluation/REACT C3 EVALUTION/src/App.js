import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Form from './Components/Form'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
function App() {
  return (
    <>
      {/* IMPORT BELOW EVERYTHING  */}
      <Navbar></Navbar>
      <br></br>
      <Routes>
        <Route path="/" element={< welcome />} />
        <Route path="/books" element={<Form />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}
export default App
