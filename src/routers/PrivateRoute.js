import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';


export const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      sessionStorage.getItem("uid") ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );

  export default PrivateRoute;
