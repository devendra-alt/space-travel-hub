import React from 'react';
import {
  Col, Container, ListGroup, Row,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from './Header';

function Profile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <>
      <Header />
      <Container fluid className="mx-auto col-10">
        <Row>
          <Col />
          <Col>
            <p className="h2">My Rockets</p>
            <ListGroup>
              {reservedRockets.map((rocket) => (
                <ListGroup.Item key={rocket.id}>
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
