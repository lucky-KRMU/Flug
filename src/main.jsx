import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from "./Components/Hero/Hero"
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import SearchFlights from './Components/Flights/SearchFlights.jsx'
import Flights from './Components/Flights/Flights.jsx'
import Search from './Components/Search/Search.jsx'
import SearchLayout from './Components/Search/SearchLayout.jsx'
import SearchAirports from './Components/Airports/SearchAirports.jsx'
import SearchAirlines from './Components/Airlines/SearchAirlines.jsx'
import SearchAirplanes from './Components/Airplanes/SearchAirplanes.jsx'
import SearchAircraftType from './Components/AircraftType/SearchAircraftType.jsx'



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
        { // NOTE: Each nested route with childrens must have an outlet.
          path: "search",
          element: <SearchLayout />,
          children: [
            {
              path: "",
              element: <Search />
            },
            {
              path: "flights",
              element: <SearchFlights />
            },
            {
              path: "airports",
              element: <SearchAirports />
            },
            {
              path: "airlines",
              element: <SearchAirlines />
            },
            {
              path: "airplanes",
              element: <SearchAirplanes />
            },
            {
              path: "aircraft/type",
              element: <SearchAircraftType />
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
