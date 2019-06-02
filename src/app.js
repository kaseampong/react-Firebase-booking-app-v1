import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter,{history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import LoadingPage from './components/LoadingPage';
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
const jsx = (
  <Provider store={store.store}>
  <PersistGate persistor={store.persistor}>
    <AppRouter />
    </PersistGate>
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById('app'));
renderApp();

