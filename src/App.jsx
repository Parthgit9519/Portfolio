import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Screens/Home'
import Navbar from './Components/Navbar'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Education from './Screens/Education'
import Projects from './Screens/Projects'
import Skills from './Screens/Skills'


const App = () => {

  let router = createBrowserRouter([
    {
      path: "/",
      element:
        <div>
          <Navbar></Navbar>
          <Home></Home>
        </div>
    },

    {
      path: "/about",
      element:
        <div>
          <Navbar></Navbar>
          <About></About>
        </div>
    },
    {
      path: "/contact",
      element:
        <div>
          <Navbar></Navbar>
          <Contact></Contact>
        </div>
    },

    {
      path: "/education",
      element:
        <div>
          <Navbar></Navbar>
          <Education></Education>
        </div>
    },
    {
      path: "/projects",
      element:
        <div>
          <Navbar></Navbar>
          <Projects></Projects>
        </div>
    },
    {
      path: "/skills",
      element:
        <div>
          <Navbar></Navbar>
          <Skills></Skills>
        </div>
    },
  ])

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App