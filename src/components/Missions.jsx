import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/missionsSlice';
import MissionList from './MissionList';
import Header from './Header';


function Mission() {
  // const missionsData = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

return (
    <>
     
       if (missionsData.loading) {
    return (
      <>
       <Header />
      <div>
        <p>Loading...</p>
      </div>
      </>
    );
  }

  if (missionsData.error) {
    return (
      <>
       <Header />
      <div>
        <p>
          Oops! an error occurred:
          {missionsData.error}
        </p>
      </div>
     </>  
  );
  }
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4">
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2 text-left">Mission</th>
            <th className="border p-2 text-left">Description</th>
            <th className="border p-2 text-left">Status</th>
            <th className="border p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {missionsData.missions.map((mission, index) => (
            <MissionList
              key={mission.mission_id}
              mission={mission}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Mission;
