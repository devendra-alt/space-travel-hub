import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
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
      path: '/my-profile',
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
