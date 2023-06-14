import PropTypes from 'prop-types';
import { Button } from './ButtonBack.styled.js';

export default function ButtonBack({ location }) {
  return (
    <>
      <Button to={location}> Back to</Button>
    </>
  );
}

ButtonBack.propTypes = {
  location: PropTypes.any.isRequired,
};
