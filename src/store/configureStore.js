// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import authReducer from "../reducers/auth";
// import bookingReducer from "../reducers/booking";
// import roomsReducer from "../reducers/rooms";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default () => {
//   const store = createStore(
//     combineReducers({
//       auth: authReducer,
//       booking: bookingReducer,
//       rooms: roomsReducer,


//     }),
//     composeEnhancers(applyMiddleware(thunk))
//   );

//   return store;
// };

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['booking','auth','hostel','payment']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)



export default () => {
  let store = createStore(persistedReducer,composeEnhancers(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}



// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default () => {
//   const store = createStore(
//     combineReducers({
//         auth:  authReducer,
//         booking: bookingReducer,
//         rooms: roomsReducer,
// }),
//     composeEnhancers(applyMiddleware(thunk))
//   );

//   return store;
// };
