import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Layout/Home'
import Root from './Components/Root/Root'
import Shop from './Components/Shop/Shop'
import Order from './Components/Order/Order'
import Error from './Components/Error/Error'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'shop',
        element: <Shop></Shop>,
        loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
      },
      {
        path:'order',
        element:<Order></Order>
      },

      {
        path: '*',
        element:<Error></Error>
      }

    ]

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
