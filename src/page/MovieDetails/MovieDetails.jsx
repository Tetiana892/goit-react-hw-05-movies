import { useEffect, useState } from 'react';
import { searchGeneralInfo } from '../../services/MoviApi';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import MovieDetailPage from 'components/MovieDetailPage/MovieDetailPage';
import styled from '@emotion/styled';

const Section = styled.section`
  padding: 40px 0;
`;

const Container = styled.div`
  padding: 0 230px;
`;

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetailPage, setMovieDetailPage] = useState();
  const [error, setError] = useState(null);

  // const location = useLocation();
  // const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    searchGeneralInfo(movieId)
      .then(data => {
        if (data.lenght === 0) {
          setMovieDetailPage([]);
          setError('There is no information about the film');
          return;
        }
        setMovieDetailPage(data);
      })
      .catch(error => setError(error.message));
  }, [movieId, setMovieDetailPage]);

  return (
    <Section>
      <Container>
        {error && <Navigate to="/" replace />}
        {movieDetailPage && <MovieDetailPage movieInfo={movieDetailPage} />}
      </Container>
    </Section>
  );
}
