import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/login" element={<Login />}>
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App