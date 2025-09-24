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
import Login2 from './pages/Login2';
import Login3 from './pages/Login3';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Registration />}></Route>
      <Route path="/login2" element={<Login2 />}></Route>
      <Route path="/login3" element={<Login3 />}></Route>
    </>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App