import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Home from '../pages/home/Home';
import NotFound from '../pages/notFound';

const Navigation = () => {
  const authenticated = true;
  return (
    <main>
      <Routes>
        <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
          <Route
            path="/home"
            name="home"
            element={<Home />}
          />
        </Route>
        <Route path="*" name="notFound" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Navigation;
