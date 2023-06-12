// https://api.themoviedb.org/3/movie/550?api_key=cca79e12b25cdd9f67fc795a1689f5d9
import axios from 'axios';

const API_KEY = 'cca79e12b25cdd9f67fc795a1689f5d9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// список популярних фільмів на головній сторінці
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// пошук фільму по ключовому слову
export const searchByMovies = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};

// запит повної інформації про фільм для сторінки кінофільму
export const searchGeneralInfo = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// запит інформації про акторів
export const fetchMovieCasts = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// запит обзорів для сторінки кінофільмів
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`
  movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data.results;
};
