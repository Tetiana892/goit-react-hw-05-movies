import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import ErrorMessage from 'components/Error/Error';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import { searchByMovies } from '..//../services/MoviApi';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    const searchMovieId = async () => {
      if (!currentQuery) return;
      setStatus(STATUS.PENDING);
      try {
        const data = await searchByMovies(currentQuery);

        if (data.length === 0) {
          setMovies([]);
          setError('No content, please try another query.');
          return;
        }
        setMovies(data);
        setStatus(STATUS.RESOLVED);
        setError('');
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
      }
    };
    searchMovieId();
  }, [searchParams]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  }

  const formSubmit = value => {
    setSearchParams({ query: value });
  };

  const formErrorMessage = () => {
    setMovies([]);
    setError('You entered an empty row!');
  };

  return (
    <div>
      <SearchForm formSubmit={formSubmit} errorMessage={formErrorMessage} />
      {STATUS.REJECTED && <ErrorMessage message={error} />}
      {STATUS.RESOLVED && <MovieList movies={movies} />}
    </div>
  );
}
