import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Rules from './rules.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/rules',
    element:<Rules />
  },
  {
    path: '/home',
    element:<Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
