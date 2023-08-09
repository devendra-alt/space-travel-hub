import React from 'react';
import Header from './Header';

function Profile() {
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
