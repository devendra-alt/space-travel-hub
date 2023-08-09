import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import { fetchRocketData } from './redux/rockets/features/rocketsSlice';

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
function App() {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchRocketData());
  }, [dispath]);
  return <RouterProvider router={router} />;
}

export default App;
