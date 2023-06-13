import { fetchMovieCasts } from '..//../services/MoviApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorMessage from 'components/Error/Error';
import Credits from 'components/Credits/Credits';

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    fetchMovieCasts(movieId)
      .then(data => {
        if (data.length === 0) {
          setError('There is no information about the cast');
          return;
        }
        setCredits(data);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {credits && <Credits credits={credits} />}
    </div>
  );
}
