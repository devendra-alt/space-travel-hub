import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from '../redux/missions/missionsSlice';

function MissionList({ mission, index }) {
  const dispatch = useDispatch();

  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <tr className={index % 2 === 0 ? 'bg-gray-100' : ''}>
      <td className="border p-4">{mission.mission_name}</td>
      <td className="border p-4">{mission.description}</td>
      <td className="border p-4">
        <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 whitespace-nowrap">
          NOT A MEMBER
        </span>
      </td>
      <td>
        <button
          type="button"
          className="border p-2 bg-blue-400 text-white hover:bg-gray-600 mx-2 rounded whitespace-nowrap"
          onClick={() => handleJoin(mission.mission_id)}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
}

MissionList.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mission_id: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default MissionList;
