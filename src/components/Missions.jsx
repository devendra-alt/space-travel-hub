import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/missionsSlice';
import Header from './Header';

function Mission() {
  // const missionsData = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions()).unwrap(); // unwrap the promise returned by the async thunk
  }, [dispatch]);

  return (
    <>
      <Header />
      <div>
        <h1>hello Missions</h1>
      </div>
    </>
  );
}

export default Mission;
