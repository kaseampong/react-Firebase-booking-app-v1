import React from 'react';
import { BrowserRouter,Router, Route, Switch ,Link, NavLink  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SignUpFormPage from '../components/SignUpFormPage';
import LoginFormPage from '../components/LoginFormPage';
// import Procedure from '../components/Dashboard/dashboard-components/Procedure';
import ViewRoomsFormPage from '../components/ViewRoomsFormPage';
import ViewBookingPage from '../components/ViewBookingPage';
import RoomsPage from '../components/RoomsPage';
import BookRoomFormPage from '../components/BookRoomFormPage';
import BookingFormPage from '../components/BookingFormPage';
import Dashboard from '../components/Dashboard';
import ConfirmSuccessPage from '../components/ConfirmSuccessPage';
import ProcedurePage from '../components/ProcedurePage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();
const AppRouter = () => (
  <Router history={history}> 
    <div>
      <Switch>
      <PublicRoute path="/" component={LoginFormPage} exact={true} />
      <PublicRoute path="/signup" component={SignUpFormPage}  />
      <PrivateRoute path="/dashboard" component={Dashboard}  />
      <PrivateRoute path="/viewBooking/form" component={BookingFormPage}  />
      <PrivateRoute path="/view" component={ViewRoomsFormPage}  />
      <PrivateRoute path="/booking" component={ViewBookingPage}  />
      <PrivateRoute path="/booked/success" component={ConfirmSuccessPage}  />
      <PrivateRoute path="/help" component={ProcedurePage}  />
      <PrivateRoute path="/rooms" component={RoomsPage}  />
      <PrivateRoute path="/book" component={BookRoomFormPage}  />

      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
