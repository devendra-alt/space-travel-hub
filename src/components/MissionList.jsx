import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';
import '../styles/MissionList.css';

function MissionList({ mission, index }) {
  const dispatch = useDispatch();
  const handleAttendance = () => {
    if (mission && mission.reserved) {
      dispatch(leaveMission(mission.mission_id));
    } else {
      dispatch(joinMission(mission.mission_id));
    }
  };

  const badgeText = mission?.reserved ? 'ACTIVE MEMBER' : 'NOT A MEMBER';

  // Define getButtonContent function here
  const getButtonContent = (reserved) => (reserved ? 'Leave Mission' : 'Join Mission');

  return (
    <tr className={index % 2 === 0 ? 'bg-gray-100' : ''}>
      <td className="border p-4">{mission?.mission_name}</td>
      <td className="border p-4">{mission?.description}</td>
      <td className="border p-4">
        <span
          className={`inline-flex items-center rounded-md ${
            mission?.reserved ? 'active-badge' : 'not-member-badge'
          } whitespace-nowrap`}
        >
          {badgeText}
        </span>
      </td>
      <td>
        <button
          type="button"
          className={`border p-1 ${
            mission?.reserved ? 'leave-button' : 'join-button'
          } mx-2 rounded whitespace-nowrap`}
          onClick={handleAttendance}
        >
          {getButtonContent(mission?.reserved)}
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
    reserved: PropTypes.bool.isRequired,
  }),
  index: PropTypes.number.isRequired,
};

// Provide a default value for the mission prop
MissionList.defaultProps = {
  mission: {
    mission_name: '',
    description: '',
    mission_id: '',
    reserved: false,
  },
};

export default MissionList;
