import React from 'react';
import { Router, Route, Switch   } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import SignUpFormPage from '../components/SignUpFormPage';
import LoginFormPage from '../components/LoginFormPage';
import ViewRoomsFormPage from '../components/ViewRoomsFormPage';
import ViewBookingPage from '../components/ViewBookingPage';
import RoomsPage from '../components/RoomsPage';
import BookRoomFormPage from '../components/BookRoomFormPage';
import BookingFormPage from '../components/BookingFormPage';
import DashboardPage from '../components/DashboardPage';
import BookingSuccessPage from '../components/BookingSuccessPage';
import PaymentSuccessPage from '../components/PaymentSuccessPage';
import PaymentFormPage from '../components/PaymentFormPage';
import PaymentDashboardPage from '../components/PaymentDashboardPage';
import ProcedurePage from '../components/ProcedurePage';
import GalleryPage from '../components/GalleryPage';
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
      <PrivateRoute path="/dashboard" component={DashboardPage}  />
      <PrivateRoute path="/viewBooking/form" component={BookingFormPage}  />
      <PrivateRoute path="/view" component={ViewRoomsFormPage}  />
      <PrivateRoute path="/booking" component={ViewBookingPage}  />
      <PrivateRoute path="/booked/success" component={BookingSuccessPage}  />
      <PrivateRoute path="/paid/success" component={PaymentSuccessPage}  />
      <PrivateRoute path="/paymentForm" component={PaymentFormPage}  />
      <PrivateRoute path="/payment" component={PaymentDashboardPage}  />
      <PrivateRoute path="/help" component={ProcedurePage}  />
      <PrivateRoute path="/rooms" component={RoomsPage}  />
      <PrivateRoute path="/book" component={BookRoomFormPage}  />
      <PrivateRoute path="/gallery" component={GalleryPage}  />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
