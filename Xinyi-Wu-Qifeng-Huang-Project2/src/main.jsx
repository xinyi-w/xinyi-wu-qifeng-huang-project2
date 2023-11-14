import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AppHard from './AppHard.jsx'
import Rules from './rules.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/rules',
    element:<Rules />
  },
  {
    path: '/game',
    element:<App />
  },
  {
    path: '/game/normal',
    element:<App />
  },
  {
    path: '/game/hard',
    element:<AppHard />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
