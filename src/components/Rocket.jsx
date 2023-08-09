import React from 'react';
import { Badge, Card, Stack } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  rocketBooking,
  rocketBookingCancel,
} from '../redux/rockets/features/rocketsSlice';

function Rocket({ id, name, images, description, reserved }) {
  const dispath = useDispatch();
  return (
    <Card>
      <Stack direction="horizontal" gap={2}>
        <Card.Img src={images[0]} style={{ width: '20rem' }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text style={{ fontSize: '1.4rem' }}>
            {reserved && <Badge bg="success">Reserved</Badge>} {description}
          </Card.Text>
          {reserved ? (
            <Button
              variant="outline-secondary"
              onClick={() => dispath(rocketBookingCancel(id))}
            >
              Cancel Reservation
            </Button>
          ) : (
            <Button onClick={() => dispath(rocketBooking(id))}>
              Reserve Rocket
            </Button>
          )}
        </Card.Body>
      </Stack>
    </Card>
  );
}
Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.shape.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};

export default Rocket;
