import { HeaderContainer, Link } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader.jsx';

export default function Layout() {
  return (
    <>
      <HeaderContainer>
        <nav>
          <Link to="/">Home</Link>

          <Link to="movies">Movies</Link>
        </nav>
      </HeaderContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
