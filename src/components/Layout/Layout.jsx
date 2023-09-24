import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader/Loader';

import {
  Links,
} from './Layout.styled';
const Layout = () => {
  return (
    <>
      <div>
        <div>
       
          <nav>
            <Links to="/" end>Home</Links>
            <Links to="/movies">Movie</Links>
          </nav>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
     
      </div>
    </>
  );
};

export default Layout;
