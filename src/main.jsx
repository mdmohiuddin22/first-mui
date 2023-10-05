import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/SignUp';
import App from './App';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)