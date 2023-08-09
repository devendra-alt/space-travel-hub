import React from 'react';
import Header from './Header';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
function Profile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <>
      <Header />
      <Container fluid className="mx-auto col-10">
        <Row>
          <Col></Col>
          <Col>
            <p className="h2">My Rockets</p>
            <ListGroup>
              {reservedRockets.map((rocket) => (
                <ListGroup.Item>
                  <p style={{ fontSize: '1.4rem' }}>{rocket.name}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
