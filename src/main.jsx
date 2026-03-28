import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from "./Components/Hero/Hero"
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
let router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Hero />
        },
        {
          path: "home",
          element: <Hero />
        }
  
      ]
    }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
