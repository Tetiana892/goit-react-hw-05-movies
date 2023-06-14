import {
  Container,
  List,
  Item,
  Text,
  TextBold,
  TextTitle,
} from './ReviewsContent.styled.js';
import PropTypes from 'prop-types';

export default function ReviewsContent({ reviews }) {
  return (
    <Container>
      <List>
        {reviews.map(({ id, author, content }) => {
          return (
            <Item key={id}>
              <TextBold>{author}</TextBold>
              <Text>
                <TextTitle>Reviews:</TextTitle>
                {content}
              </Text>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}

ReviewsContent.propTypes = {
  reviews: PropTypes.array.isRequired,
};
