import React, { useEffect } from 'react'; // 👈 1. Import useEffect
import Navbar from './Components/Navbar';
import { Outlet, useNavigate } from 'react-router-dom'; // 👈 2. Import useNavigate

const Layout = () => {
  const navigate = useNavigate(); // 👈 3. Get the navigate function

  // 👇 4. Add the useEffect hook
  useEffect(() => {
    // This code runs only once when the component first mounts (on load or refresh)
    navigate('/');
  }, []); // The empty array [] ensures this effect runs only once

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;