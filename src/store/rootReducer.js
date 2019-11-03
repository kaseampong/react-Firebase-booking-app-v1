import { combineReducers } from 'redux'
import authReducer from "../reducers/auth";
import bookingReducer from "../reducers/booking";
import hostelReducer from "../reducers/hostel";
import paymentReducer from "../reducers/payment";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const bookingPersistConfig = {
  key: 'booking',
  storage: storage,
  whitelist: ['booking']
}

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['uid','adm','gender','academicYear']
}


const hostelPersistConfig = {
  key: 'hostel',
  storage: storage,
  whitelist: ['rooms','academicYear','term']

}


const paymentPersistConfig = {
  key: 'payment',
  storage: storage,
  whitelist: ['paymentId','academicYear','amount','adm']

}

export default combineReducers({
          auth:  persistReducer(authPersistConfig, authReducer),
          booking: persistReducer(bookingPersistConfig, bookingReducer),
          hostel:persistReducer(hostelPersistConfig, hostelReducer),
          payment:persistReducer(paymentPersistConfig, paymentReducer)
})

