import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Rules from './rules.jsx'
import game from './game.jsx'

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
    element:<Games />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <RouterProvider router={router} />
      <App />{/* same as calling App() */}
    </CountProvider>
    <App />
  </React.StrictMode>,
)
