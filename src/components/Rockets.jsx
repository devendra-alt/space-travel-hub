import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import { fetchRocketData } from '../redux/rockets/features/rocketsSlice';

function Rockets() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchRocketData());
  }, [dispath]);

  return (
    <>
      <Header />
    </>
  );
}

export default Rockets;
