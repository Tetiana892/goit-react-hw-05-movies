import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/MoviApi';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/Error/Error';
import MovieList from 'components/MovieList/MovieList';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Home() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingFilm = async () => {
      setStatus(STATUS.PENDING);

      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
        setStatus(STATUS.RESOLVED);
        setError(null);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
      }
    };

    fetchTrendingFilm();
  }, []);

  if (status === STATUS.PENDING) {
    return <Loader />;
  }

  return (
    <section>
      <h1>Trending today</h1>
      {error && <ErrorMessage message={error} />}
      {movies && <MovieList movies={movies} />}
    </section>
  );
}
