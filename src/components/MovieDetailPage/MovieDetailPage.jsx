import {
  Container,
  DetailsContainer,
  Image,
  InfoContainer,
  Title,
  TitleSpan,
  Text,
  MoreNavigate,
  MoreInfo,
  More,
  MoreList,
  MoreItem,
  LinkTo,
} from './MovieDetailPage.styled';

import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

export default function MovieDetailPage({ movieInfo }) {
  const {
    originalTitle,
    title,
    genres,
    overview,
    poster,
    releaseDate,
    voteAverage,
  } = movieInfo;

  const genresArray = genres.map(gen => gen.name).join(',');
  const location = useLocation();

  return (
    <Container>
      <DetailsContainer>
        <Image
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
          }
          alt={title}
        />
        <InfoContainer>
          <Title>
            {originalTitle ? originalTitle : 'There should have been a title'}
          </Title>
          <Text>
            <TitleSpan>Rating:</TitleSpan>{' '}
            {voteAverage ? voteAverage : 'Absent'}
          </Text>
          <Text>
            <TitleSpan>Release date:</TitleSpan>{' '}
            {releaseDate ? releaseDate : 'Absent'}
          </Text>
          <Text>
            <TitleSpan>Genre:</TitleSpan>{' '}
            {genresArray ? genresArray : 'Repeated'}
          </Text>
          <Text>
            <TitleSpan>Description:</TitleSpan>
            {overview
              ? overview
              : 'There should have been a description here, but it is better to see once than to read a hundred times.'}
          </Text>
        </InfoContainer>
      </DetailsContainer>
      <MoreInfo>
        <More>Learn more</More>
      </MoreInfo>
      <MoreNavigate>
        <MoreList>
          <MoreItem>
            <LinkTo to="cast" state={location.state}>
              Cast
            </LinkTo>
          </MoreItem>
          <MoreItem>|</MoreItem>
          <MoreItem>
            <LinkTo to="reviews" state={location.state}>
              Reviews
            </LinkTo>
          </MoreItem>
        </MoreList>
      </MoreNavigate>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

MovieDetailPage.propTypes = {
  movieInfo: PropTypes.shape({
    originalTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
  }).isRequired,
};
