import * as React from 'react'
import ReactDOM from 'react-dom/client'
import * as ReactDom from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Root from './root/root.jsx'

const router = ([
    {
        path:"/",
        element:<Root />
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router = {router} />
  </React.StrictMode>,
);