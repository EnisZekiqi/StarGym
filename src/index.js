import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SuccessMessageProvider } from './SuccessMessageContext';
import { AvatarImageProvider } from './AvatarImageContext';
import SignUp from './SignUp';
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
import EditProfile from './EditProfile';
import Main from './Main';
import { DarkModeProvider } from "./DarkModeContext";
import Info from './MainPage/Info';
import Masstech from '../src/MainPage/Masstech'
import VaportX from './MainPage/VaportX';
import Celltech from './MainPage/Celltech';
import Platinum from './MainPage/Platinum';
import Supplement from './MainPage/Supplements';
import { SupplementProvider } from './useSupplementContext ';
import { AuthProvider, useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/" />;
};

 const router = createBrowserRouter([
   {
     path: "/",
     element: <App/> ,
   },
   {
      path: "signup",
      element: <SignUp/> ,
    },
    {
      path: "editprofile",
      element: <EditProfile/> ,
    },
    {
      path: "main",
      element: <ProtectedRoute element={<Main />} />,
    },
    ,{
      path:"masstech",
      element:<Masstech/>
    },
    {
      path:"Vaporx5",
      element:<VaportX/>
    },
    {
      path:"celltech",
      element:<Celltech/>
    },
    {
      path:"platinum",
      element:<Platinum/>
    },
    {
    path:"supplement",
    element:<Supplement/>
    },
    {
       path :"info",
       element:<Info/> 
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SupplementProvider>
        <SuccessMessageProvider>
          <AvatarImageProvider>
            <DarkModeProvider>
              <RouterProvider router={router} />
            </DarkModeProvider>
          </AvatarImageProvider>
        </SuccessMessageProvider>
      </SupplementProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
