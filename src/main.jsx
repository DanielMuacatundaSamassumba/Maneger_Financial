import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
 import Main_forget_password from './Forget_password/Main_forget_password.tsx'
  import Main_OTP_Verify from './OTP_Verify/Main_OTP_Verify.tsx'
   import Main_New_Password from './New_Password/Main_New_Password.tsx'
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

  


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
