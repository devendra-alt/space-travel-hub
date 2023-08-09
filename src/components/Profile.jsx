import React from 'react';
import { useSelector } from 'react-redux';
import {
  Col, Container, ListGroup, Row,
} from 'react-bootstrap';
import Header from './Header';

function Profile() {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const { missions } = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <>
      <Header />
      <Container fluid className="mx-auto col-10">
        <Row>
          <Col>
            <div className="mb-4">
              <p className="h2">Missions</p>
              <ListGroup>
                {/* Render reserved missions here */}
                {reservedMissions.map((mission) => (
                  <ListGroup.Item key={mission.mission_id}>
                    <p style={{ fontSize: '1.4rem' }}>{mission.mission_name}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col>
            <div className="mb-4">
              <p className="h2">My Rockets</p>
              <ListGroup>
                {/* Render reserved rockets here */}
                {reservedRockets.map((rocket) => (
                  <ListGroup.Item key={rocket.id}>
                    <p style={{ fontSize: '1.4rem' }}>{rocket.name}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
