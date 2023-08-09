import React from 'react';
import { Alert, Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { rocketBookingCancel } from '../redux/rockets/features/rocketsSlice';

function Profile() {
  const dispath = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <>
      <Header />
      <Container fluid className="mx-auto col-10">
        <Row className="flex-column flex-lg-row flex-xl-row">
          <Col />
          <Col>
            {!reservedRockets.length && (
              <Alert variant="info">My Reserved Rockets is empty</Alert>
            )}
            {!!reservedRockets.length && (
              <ListGroup>
                <p className="h2">My Rockets</p>
                {reservedRockets.map((rocket) => (
                  <ListGroup.Item
                    key={rocket.id}
                    className="d-flex flex-sm-column flex-md-row flex-lg-row justify-content-between align-items-center"
                  >
                    <div>
                      <p style={{ fontSize: '1.4rem' }}>{rocket.name}</p>
                      <Button variant="outline-info">
                        <a href={rocket.wikipedia} target="_blank" rel="noreferrer">
                          Read more
                        </a>
                      </Button>
                    </div>
                    <Button
                      variant="outline-danger"
                      onClick={() => dispath(rocketBookingCancel(rocket.id))}
                    >
                      Cancel Reservation
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
