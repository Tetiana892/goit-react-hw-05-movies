import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '..//../services/MoviApi';
import { useState, useEffect } from 'react';
import ErrorMessage from 'components/Error/Error';
import ReviewsContent from 'components/ReviewsContent/ReviewsContent';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => {
        if (data.length === 0) {
          setError('There are no reviews');
          return;
        }
        setReviews(data);
      })
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage message={error} />}
      {reviews && <ReviewsContent reviews={reviews} />}
    </div>
  );
}
