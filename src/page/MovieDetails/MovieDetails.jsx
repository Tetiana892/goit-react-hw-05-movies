import { useEffect, useState, useRef } from 'react';
import { searchGeneralInfo } from '../../services/MoviApi';
import { useParams } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router-dom';
import MovieDetailPage from 'components/MovieDetailPage/MovieDetailPage';
import { Section, Container } from './MovieDetails.styled';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import Loader from 'components/Loader/Loader';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetailPage, setMovieDetailPage] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const generalInfo = async () => {
      setStatus(STATUS.PENDING);

      try {
        const data = await searchGeneralInfo(movieId);
        setMovieDetailPage(data);
        setStatus(STATUS.RESOLVED);
        setError(null);
        if (data.lenght === 0) {
          setMovieDetailPage([]);
          setError('There is no information about the film');
          return;
        }
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
      }
    };
    generalInfo();
  }, [movieId, setMovieDetailPage]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  }
  return (
    <Section>
      <Container>
        <ButtonBack location={backLink.current} />
        {error && <Navigate to="/" replace />}
        {movieDetailPage && <MovieDetailPage movieInfo={movieDetailPage} />}
      </Container>
    </Section>
  );
}
