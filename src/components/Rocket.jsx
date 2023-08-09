import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Card, Stack, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  rocketBooking,
  rocketBookingCancel,
} from '../redux/rockets/features/rocketsSlice';

function Rocket({ id, name, images, description, reserved }) {
  const dispath = useDispatch();
  return (
    <Card className="d-flex flex-sm-column flex-md-row flex-lg-row">
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
    </Card>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Rocket.defaultProps = {
  reserved: false,
};

export default Rocket;
