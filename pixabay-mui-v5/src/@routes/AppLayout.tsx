import React from 'react';
import { Outlet } from 'react-router-dom';
import PersistentDrawerLeft from '../@components/AppBar/Drawer';
import Footer from '../@components/Footer';
// import ComponentWithProblem from '../@components/WDYR/ComponentWithProblem';

const AppLayout = () => {
  return (
    <div className="HolyGrail">
      <PersistentDrawerLeft>
        <Outlet />
      </PersistentDrawerLeft>
      {/* Test WDYR */}
      {/* <ComponentWithProblem /> */}
      <Footer />
    </div>
  );
};

export { AppLayout };
