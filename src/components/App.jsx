import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from '../components/Loader/Loader.jsx';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../page/Home/Home.jsx'));
const Movies = lazy(() => import('../page/Movies/Movies.jsx'));
const Cast = lazy(() => import('../components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../components/Reviews/Reviews.jsx'));
const MovieDetails = lazy(() =>
  import('../page/MovieDetails/MovieDetails.jsx')
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
