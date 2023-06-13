import { Route, Routes } from 'react-router-dom';

import Home from '../page/Home/Home';
import Movies from '../page/Movies/Movies';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import Layout from './Layout/Layout';
import MovieDetails from 'page/MovieDetails/MovieDetails';

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
