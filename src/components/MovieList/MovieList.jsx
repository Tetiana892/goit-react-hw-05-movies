import PropTypes from 'react';
import { List } from './MovieList.styled';
import MovieListItem from 'components/MovieListItem/MovieListItem';

export default function MovieList({ movies }) {
  return (
    <List>
      {movies.map(({ id, original_title, poster_part }) => {
        return (
          <MovieListItem
            key={id}
            id={id}
            title={original_title}
            poster={poster_part}
          />
        );
      })}
    </List>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
};
