import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const config = configureStore();
const{store,persistor} = config;
const jsx = (
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <AppRouter />
    </PersistGate>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


