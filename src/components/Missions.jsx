import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import MissionList from './MissionList';
import Header from './Header';

function Missions() {
  const missionsData = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionsData.missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missionsData.missions.length]);

  return (
    <>
      <Header />
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
            {missionsData.loading || missionsData.error ? (
              <tr>
                <td colSpan="4">
                  {missionsData.error
                    ? `Oops! An error occurred: ${missionsData.error}`
                    : 'Loading...'}
                </td>
              </tr>
            ) : (
              missionsData.missions.map((mission, index) => (
                <MissionList
                  key={mission.mission_id}
                  mission={mission}
                  index={index}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Missions;
