import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from "./Components/Hero/Hero"
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import SearchFlights from './Components/Flights/SearchFlights.jsx'
import Flights from './Components/Flights/Flights.jsx'



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
        },
        {
          path: "flights",
          element: <Flights />
        },
        {
          path: "search/",
          children: [
            {
              path: "flights",
              element: <SearchFlights />
            }
          ]
        }
  
      ]
    }
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
