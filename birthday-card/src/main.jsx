import React from 'react'
import ReactDOM from 'react-dom'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './App.css'
import Random1 from './root/root1.jsx'
import ErrorPage from './error-page.jsx'

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<ErrorPage />
    },{
        path:"/wish-card",
        element:<Random1 />
    }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
  document.getElementById('root')

);