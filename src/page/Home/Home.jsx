import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/MoviApi';
import Loader from 'components/Loader/Loader';
// import ErrorMessage from 'components/Error/Error';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  // const { movies, error } = fetchTrendingMovies();

  useEffect(() => {
    const fetchTrendingFilm = () => {
      setLoading(true);

      fetchTrendingMovies()
        .then(data => {
          setFilms(data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTrendingFilm();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {/* {error && <ErrorMessage message={error} />} */}
      {films && <MovieList movies={films} />}
      {loading && <Loader />}
    </section>
  );
};

export default Home;
