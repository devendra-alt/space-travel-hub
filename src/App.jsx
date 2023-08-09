import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchRocketData());
  }, [dispath]);
  return <RouterProvider router={router} />;
}

export default App;
