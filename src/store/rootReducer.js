import { combineReducers } from 'redux'
import authReducer from "../reducers/auth";
import bookingReducer from "../reducers/booking";
import hostelReducer from "../reducers/hostel";
import paymentReducer from "../reducers/payment";

import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'


const bookingPersistConfig = {
  key: 'booking',
  storage: storage,
  whitelist: ['booking']
}

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['uid','regNo','userGender','academicYear']
}


const hostelPersistConfig = {
  key: 'hostel',
  storage: storage,
  whitelist: ['rooms']

}


const paymentPersistConfig = {
  key: 'payment',
  storage: storage,
  whitelist: ['paymentId','academicYear','amountPaid','regNo']

}

export default combineReducers({
          auth:  persistReducer(authPersistConfig, authReducer),
          booking: persistReducer(bookingPersistConfig, bookingReducer),
          hostel:persistReducer(hostelPersistConfig, hostelReducer),
          payment:persistReducer(paymentPersistConfig, paymentReducer)
})


// import { combineReducers } from 'redux'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import authReducer from "../reducers/auth";
 
//  import bookingReducer from "../reducers/booking";
// import roomsReducer from "../reducers/rooms";

// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: ['booking']
// }
 
// const bookingPersistConfig = {
//   key: 'booking',
//   storage: storage,
//   blacklist: ['message']
// }
 
// const rootReducer = combineReducers({
//   auth: authReducer,
//   booking: persistReducer(bookingPersistConfig, bookingReducer),
//   rooms: roomsReducer,
// })
 
// export default persistReducer(rootPersistConfig, rootReducer)