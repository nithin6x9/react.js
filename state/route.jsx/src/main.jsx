import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter} from 'react-dom';
import {Randi} from './root/root.jsx'


const router = createBrowserRouter([
    {
        path:'/',
        element:<App />
    },{
        path:'randi',
        element:'/Randi'
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />

    </React.StrictMode>,
)
