import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
 import Main_dashboard from './Dashboard/Main_dashboard.tsx'
import './index.css'


 import Main_forget_password from './Forget_password/Main_forget_password.tsx'

  import Main_sign_uo from './Sign_Up/Main_sign_uo.tsx'
=======

  import Main_OTP_Verify from './OTP_Verify/Main_OTP_Verify.tsx'
   import Main_New_Password from './New_Password/Main_New_Password.tsx'

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

    path: "OTP",
    element: <Main_OTP_Verify />,

  },
  {
    path: "New-Password",
    element: <Main_New_Password />,

  },
=======
    path: "forgetpassword",
    element: <Main_forget_password />,

  },
  {
    path: "perfil",
    element: <Perfil />,

  },
 
  {

    path: "signUp",
    element: <Main_sign_uo />,

  },
 

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
