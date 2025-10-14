import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Education from './Screens/Education';
import Projects from './Screens/Projects';
import Skills from './Screens/Skills';
import Layout from './Layout'; // 👈 Import your new Layout component

const App = () => {
  const router = createBrowserRouter([
    {
      // Parent Route: This defines the shared layout
      path: "/",
      element: <Layout />, 
      children: [
        // Child Routes: These will be rendered inside the <Outlet>
        {
          index: true, // 👈 'index: true' makes this the default child route for "/"
          element: <Home />,
        },
        {
          path: "about", // No leading slash needed
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;