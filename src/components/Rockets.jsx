import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, ListGroup, Spinner } from 'react-bootstrap';
import Header from './Header';
import Rocket from './Rocket';

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
          />
        )}
        {error && <Alert variant="danger">{error}</Alert>}
        {loading === 'loaded' && (
          <ListGroup>
            {rockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>
                <Rocket
                  id={rocket.id}
                  name={rocket.name}
                  images={rocket.images}
                  description={rocket.description}
                  reserved={rocket.reserved}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </section>
    </>
  );
}

export default Rockets;
