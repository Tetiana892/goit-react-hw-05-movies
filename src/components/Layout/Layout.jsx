import { HeaderContainer, Link } from './Layout.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <HeaderContainer>
        <nav>
          <Link to="/">Home</Link>

          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderContainer>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
