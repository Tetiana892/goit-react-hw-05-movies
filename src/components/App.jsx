import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from '../components/Loader/Loader.jsx';
import Home from '../page/Home/Home';
import Movies from '../page/Movies/Movies';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import Layout from './Layout/Layout';
import MovieDetails from 'page/MovieDetails/MovieDetails';

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
