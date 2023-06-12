# React homework template

Admission criteria
Use this React project template as a starting point for your application.

The goit-react-hw-05-movies repository has been created.
When you turn in your homework, there are links to: the source files and work pages of each project on `GitHub Pages'.
The component state stores the minimum required set of data, the rest is calculated
There are no errors or warnings in the console when running the job code
For each component has a separate folder with the React-component file and styles file
For the components are described propTypes.
Everything that a component expects in the form of a prop is passed to it when it is called
Component names are clear, descriptive
JS-code is clean and clear, Prettier is used
Styling is done by CSS modules or Styled Components.
Movie Search.
Create a basic routing for a movie search and storage application. Preview working application see link.

themoviedb.org API
For the backend, use themoviedb.org API. You need to register (you can enter any data) and get API key. The following endpoints will be used in this work.

/trending/get-trending a list of the most popular movies for today to create a collection on the home page page.
/search/search-movies keyword search for a movie on the movies page.
/movies/get-movie-details Request full movie info for the movie page.
/movies/get-movie-credits Request cast info for the movie page.
/movies/get-movie-reviews requesting reviews for the movie page.
Documentation link

Routes.
The app should have the following routes. If a user has accessed a non-existent route, it must be redirected to the home page.

The ``Home'' component, the home page with a list of popular movies.
The /'/movies' - component Movies, a page of movie search by keyword. keyword.
/movies/:movieId' - component MovieDetails, a page with detailed information about the movie.
/movies/:movieId/cast - component Cast, information about the cast. Rendered on the page MovieDetails.
/movies/:movieId/reviews - component Reviews, information about reviews. Rendered on the page MovieDetails.
Code Splitting
Add asynchronous JS code loading for the application routes using React.lazy() and <Suspense>.
