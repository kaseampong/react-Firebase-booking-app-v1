import database from '../firebase/firebase';
import AppRouter, {history} from '../routers/AppRouter';
import {resetRooms} from './auth';


// SET_ROOMS
export const setRooms = (rooms) => ({
  type: 'SET_ROOMS',
  rooms
});

// SET_BOOKING
export const setBooking = (booking) => ({
  type: 'SET_BOOKING',
  booking
});


// SUCCESS_BOOKING
export const successBooking = (message) => ({
  type: 'SUCCESS_BOOKING',
  message
});


// FAILED_BOOKING
export const failedBooking = (message) => ({
  type: 'FAILED_BOOKING',
  message
});

// RESET_MESSAGE
export const resetMessage = () => ({
  type: 'RESET_MESSAGE'
});


export const startViewRooms = ({
  hostelName
}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    return database.ref(`hostels/${hostelName}/rooms`).orderByKey().once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const rooms = [];
        snapshot.forEach((childSnapshot) => {
          rooms.push({
            room_name: childSnapshot.key,
            ...childSnapshot.val()
          });
          dispatch(setRooms(rooms));
        });
      } else {
        const rooms = [];
        dispatch(setRooms(rooms));
      }

    });
  };
};


// VIEW BOOKING
export const startViewBooking = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      academicYear = ''
    } = userData;

    const details = `${academicYear}_${uid}`;
    return database.ref(`bookings`).orderByChild('academicYear').equalTo(details).once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const booking = [];
        snapshot.forEach((childSnapshot) => {
          booking.push({
            bookingId: childSnapshot.key,
            ...childSnapshot.val(),
            academicYear
          });

        });
        dispatch(setBooking(booking));
      } else {
        const booking = [];
        dispatch(setBooking(booking));
      }
    });
  };
};


// BOOK ROOM
export const startBookRoom = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const academicYear = getState().auth.academicYear;
    const userGender = getState().auth.userGender;
    const regNo = getState().auth.regNo;

    const {
      hostelName = '',
        roomName = '',
        bookingDate = '',
        bookingTime = ''
    } = userData;

    // check if user has already booked
    const details = `${academicYear}_${uid}`;
    return database.ref(`bookings`).orderByChild('academicYear').equalTo(details).once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const message = 'You have already booked room.';
        dispatch(failedBooking(message));

      } else {
        // check if user has paid the required amount
        return database.ref(`payments`).orderByChild('academicYear').equalTo(details).once('value').then((snapshot) => {
          if (snapshot.exists()) {
            let user = {};
            snapshot.forEach((childSnapshot) => {
              user = {
                ...childSnapshot.val()
              }
            })
            const amount = parseInt(user.amountPaid, 10);
            if (amount >= 3500) {
              //check gender to verify the gender of student
              return database.ref(`hostels/${hostelName}/hostelDetails`).once('value').then((snapshot) => {
                const hostel = {
                  ...snapshot.val()
                };
                if (hostel.gender == userGender) {
                  // check if room capacity is full
                  return database.ref(`hostels/${hostelName}/rooms/${roomName}`).once('value').then((snapshot) => {
                    if (snapshot.exists()) {
                      const room = {
                        ...snapshot.val()
                      };
                      // const beds = parseInt(room.beds, 10);
                      const beds = room.beds;
                      if (beds == 0) {
                        const message = 'Room is full ,choose another room.';
                        dispatch(failedBooking(message));
                      } else {
                        // BOOK ROOM
                        const booking = {
                          regNo: regNo,
                          roomName,
                          bookingDate,
                          bookingTime,
                          academicYear: details,
                          hostelName
                        };
                        return database.ref(`bookings`).push(booking).then((ref) => {

                          //update number of beds after each booking
                          const newCapacity = beds - 1;
                          const update = {
                            beds: newCapacity
                          }
                          return database.ref(`hostels/${hostelName}/rooms/${roomName}`).update(update).then(() => {
                            const message = `You have sucessfully booked room ${roomName}.`;
                            dispatch(successBooking(message));
                            dispatch(resetMessage());
                            history.push('/booked/success');
                          })
                        })
                      }
                    } else {
                      const message = `Room does not exist in hostel ${hostelName}. `;
                      dispatch(failedBooking(message));
                    }

                  })
                } else {
                  const message = 'Room is not for your gender.';
                  dispatch(failedBooking(message));
                }
              })
            } else {
              const message = 'You have not yet paid required amount.';
              dispatch(failedBooking(message));
            }
          } else {
            const message = 'You have not yet paid required amount.';
            dispatch(failedBooking(message));
          }
        })
      }
    });
  };
};