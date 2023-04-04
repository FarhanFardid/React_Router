import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Firstpage from './components/First/Firstpage';
import Users from './components/Users/Users';

 
// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element:<Home></Home>
//     },
//     {
//       path: '/about',
//       element: <About></About>
//     },
//     {
//       path: '/contact',
//       element: <Contacts></Contacts>
//     },
//     {
//       path:'*',
//       element: <Error></Error>
//     }
//   ]
// );

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children:[
      {
        path: '/',
        element:<Firstpage></Firstpage>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contacts',
        element:<Contacts></Contacts>
      },
      {
         path:'/users',
         element: <Users></Users>,
         loader : () => fetch('https://jsonplaceholder.typicode.com/users') 
      },
      {
        path: '*',
        element: <Error></Error>
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
     
  </React.StrictMode>,
)
