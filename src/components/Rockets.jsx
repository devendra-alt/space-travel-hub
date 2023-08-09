import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Rocket from './Rocket';
import { Alert, ListGroup, Spinner } from 'react-bootstrap';
function Rockets() {
  const { rockets, loading, error } = useSelector((state) => state.rockets);
  return (
    <>
      <Header />
      <section className="rockets-container">
        {loading === 'pending' && (
          <Spinner
            animation="border"
            role="status"
            style={{ width: '5rem', height: '5rem' }}
            variant="primary"
          ></Spinner>
        )}
        {error && <Alert variant="danger">{error}</Alert>}
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
