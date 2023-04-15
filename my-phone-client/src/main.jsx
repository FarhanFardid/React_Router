import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Phones from './components/phones';
import Phone from './components/Phone';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
     {
      path:'/phones',
      element:<Phones></Phones>,
      loader: () => fetch('http://localhost:3000/phones')
     },
     {
     path: '/phones/:id',
     element: <Phone></Phone>,
     loader: ({params}) => fetch(`http://localhost:3000/phones/${params.id}`) 
     }
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
