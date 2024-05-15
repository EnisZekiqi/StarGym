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
      element: <Main/> ,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <SuccessMessageProvider>
     <AvatarImageProvider>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
     </AvatarImageProvider>
     </SuccessMessageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
