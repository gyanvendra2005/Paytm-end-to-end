import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Signin from './Components/Signin/Signin.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Layout from './Layout.jsx'
import { SendMoney } from './Components/SendMoney/SendMoney.jsx'

const Router = createBrowserRouter([
  {
     path:'/',
     element:<Layout/>,
     children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'signup',
        element:<Signup />
      },
      {
        path:'signin',
        element:<Signin />
      },
      {
        path:'/send',
        element:<SendMoney />
      }

     ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
