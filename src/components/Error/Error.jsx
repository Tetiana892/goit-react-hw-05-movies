import PropTypes from 'prop-types';
import { Container, Text } from './Error.styled';

export default function ErrorMessage({ message }) {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
