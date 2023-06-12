import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'react';
import { Item, Image, Title } from './MovieListItem.styled';

export default function MovieListItem({ id, tittle, poster }) {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <Image
            src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : ``}
            alt="{tittle}"
          />
        </div>
        <Title>{tittle ? tittle : 'No tittle'}</Title>
      </Link>
    </Item>
  );
}

MovieListItem.propTypes = {
  id: PropTypes.number,
  tittle: PropTypes.string,
  poster: PropTypes.string,
};
