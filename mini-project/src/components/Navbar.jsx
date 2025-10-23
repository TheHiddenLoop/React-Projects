import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar() {
  const routes = [
    { to: "/", label: "Home" },
    { to: "/add", label: "Add" },
    { to: "/search", label: "Search" },
    { to: "/about", label: "About" }
  ]

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-md px-6 py-3 rounded-xl mx-auto w-fit">
      <ul className="flex gap-6 justify-center items-center">
        {routes.map((route, i) => (
          <li key={i}>
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-2 rounded-md transition-colors duration-300
                 ${isActive ? 'text-white bg-blue-500' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}