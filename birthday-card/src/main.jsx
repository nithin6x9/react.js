import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './App.css'
import Root from './root/root.jsx'
import ErrorPage from './error-page.jsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root />,
        errorElement:<ErrorPage />
    },
]);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <RouterProvider router = {router} />
  </React.StrictMode>,
  document.getELementById('root')

);