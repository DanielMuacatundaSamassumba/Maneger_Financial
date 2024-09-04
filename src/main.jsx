import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
 import Main_dashboard from './Dashboard/Main_dashboard.tsx'
import './index.css'

=======
 import Main_forget_password from './Forget_password/Main_forget_password.tsx'
 import Perfil from './Perfil-user/Perfil.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "forgetpassword",
    element: <Main_forget_password />,

  },
  {
    path: "forgetpassword",
    element: <Main_forget_password />,

  },
  {
    path: "perfil",
    element: <Perfil />,

  },
 
  {
    path: "dashboard",
    element: <Main_dashboard />,

  },
  


]);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  


  


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={router} />


    <RouterProvider router={router} />

  </React.StrictMode>,
)
