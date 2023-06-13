import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import ErrorMessage from 'components/Error/Error';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import { searchByMovies } from '..//../services/MoviApi';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [spiner, setSpiner] = useState(false);

  const formSubmit = value => {
    setSearchParams({ query: value });
  };

  const formErrorMessage = () => {
    setMovies([]);
    setError('You entered an empty row!');
  };

  useEffect(() => {
    const currentQuery = searchParams.get('query');

    if (!currentQuery) return;
    setSpiner(true);
    searchByMovies(currentQuery)
      .then(data => {
        if (data.length === 0) {
          setMovies([]);
          setError('No content, please try another query.');
          return;
        }
        setMovies(data);
        setError('');
      })
      .catch(error => setError(error.message))
      .finally(setSpiner(false));
  }, [searchParams]);

  return (
    <div>
      <SearchForm formSubmit={formSubmit} errorMessage={formErrorMessage} />
      {spiner && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movies && <MovieList movies={movies} />}
    </div>
  );
}
