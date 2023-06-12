import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/MoviApi';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilm = () => {
      setLoading(true);

      fetchTrendingMovies()
        .then(trendingsFilms => {
          setFilms(trendingsFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTrendingFilm();
  });

  return (
    <main>
      <h1>Trending today</h1>
      {/* <EditorList films={films} /> */}

      {loading && <Loader />}
    </main>
  );
};

export default Home;
