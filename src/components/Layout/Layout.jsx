// import { Container, Header, Link } from './Layout.styled';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    //   <Container>
    //     <Header>
    //       <nav>
    //         <Link to="/" end>
    //           Home
    //         </Link>
    //         <Link to="/movies">Movies</Link>
    //       </nav>
    //     </Header>
    //     <Outlet />
    //   </Container>;
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
