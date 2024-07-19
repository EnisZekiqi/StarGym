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
import ProtectedRoute from './ProtectedRoute';
import PlanProgram from './MainPage/Planprogram';
import Diets from './MainPage/Diets';


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
    element: <ProtectedRoute><Main/></ProtectedRoute> ,
  },
  {
    path:"masstech",
    element:<ProtectedRoute><Masstech/></ProtectedRoute>
  },
  {
    path:"Vaporx5",
    element:<ProtectedRoute><VaportX/></ProtectedRoute>
  },
  {
    path:"celltech",
    element:<ProtectedRoute><Celltech/></ProtectedRoute>
  },
  {
    path:"platinum",
    element:<ProtectedRoute><Platinum/></ProtectedRoute>
  },
  {
    path:"supplement",
    element:<ProtectedRoute><Supplement/></ProtectedRoute>
  },
  {
    path:"planprogram",
    element:<ProtectedRoute><PlanProgram/></ProtectedRoute>
  },
  {
    path:"diets",
    element:<ProtectedRoute><Diets/></ProtectedRoute>
  },
  {
    path :"info",
    element:<ProtectedRoute><Info/></ProtectedRoute>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <SupplementProvider>
    <SuccessMessageProvider>
      <AvatarImageProvider>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </AvatarImageProvider>
    </SuccessMessageProvider>
  </SupplementProvider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
