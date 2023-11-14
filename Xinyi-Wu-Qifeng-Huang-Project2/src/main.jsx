import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Rules from './rules.jsx'
import Game from './game.jsx'
import CountProvider from './CountProvider.jsx'

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
    path: '/game',
    element:<Game />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <RouterProvider router={router} />
      {/* <App />same as calling App() */}
    </CountProvider>
  </React.StrictMode>,
)
