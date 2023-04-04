import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root'
import Foods from './Components/Foods/Foods'
import Order from './Components/Order/Order'
import SeaFood from './Components/SeaFood/SeaFood'
import Contacts from './Components/Contacts/Contacts'
import Error from './Components/Error/Error'
import Home from './Components/Home/Home'

const restaurant = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/food',
        element: <Foods></Foods>,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
        
      },
      {
        path:'/order',
        element: <Order></Order>
      },
      {
        path: "/seafood",
        element: <SeaFood></SeaFood>

      },
      {
        path: '/contact',
        element:<Contacts></Contacts>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={restaurant}></RouterProvider>
  </React.StrictMode>,
)
