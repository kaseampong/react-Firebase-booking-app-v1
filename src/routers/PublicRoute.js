import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      sessionStorage.getItem("reg_no") ? (
        <Redirect to="/home" />
      ) : (
          <Component {...props} />
        )
    )} />
  );

export default PublicRoute;
