import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rockets />,
  },
  {
    path: '/missions',
    element: <Missions />,
  },
  {
    path: 'my-profile',
    element: <Profile />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
