import React, { useEffect } from 'react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { fetchRocketData } from '../redux/rockets/features/rocketsSlice';

function Rockets() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchRocketData());
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default Rockets;
