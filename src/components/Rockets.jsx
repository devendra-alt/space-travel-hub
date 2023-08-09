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
        <ListGroup>
          {rockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>
              <Rocket {...rocket} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </section>
    </>
  );
}

export default Rockets;
