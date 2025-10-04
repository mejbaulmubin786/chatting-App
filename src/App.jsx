import React from 'react'
import { CssBaseline } from "@mui/material";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Registration />}></Route>
      <Route path='/home' element={<Home />}></Route>
      
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App