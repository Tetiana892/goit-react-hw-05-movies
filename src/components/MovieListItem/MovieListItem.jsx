import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Image, Title } from './MovieListItem.styled';

export default function MovieListItem({ id, title, poster }) {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <Image
            src={
              poster
                ? `https://image.tmdb.org/t/p/w500${poster}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt="{tittle}"
          />
        </div>
        <Title>{title ? title : 'No tittle'}</Title>
      </Link>
    </Item>
  );
}

MovieListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  poster: PropTypes.string,
};
