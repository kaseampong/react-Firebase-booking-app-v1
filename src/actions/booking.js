import database from '../firebase/firebase';
import {history} from '../routers/AppRouter';



// SET_HOSTEL
export const setHostel = ({rooms = [],hostel}) => ({
  type: 'SET_HOSTEL',
  hostel,
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

 // VIEW ROOMS
export const startViewRooms = ({
  hostel
}) => {
  return (dispatch) => {
    return database.ref(`hostels/${hostel}/rooms`).orderByKey().once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const rooms = [];
        snapshot.forEach((childSnapshot) => {
          rooms.push({
            room: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
          dispatch(setHostel({rooms,hostel}));

      } else {
        const rooms = [];
        console.log(rooms);
        dispatch(setHostel(rooms));
      }

    });
  };
};


// VIEW BOOKING
export const startViewBooking = (userData = {}) => {
  return (dispatch, getState) => {
    const adm = getState().auth.adm;

    const {
      academicYear = ''
    } = userData;

    return database.ref(`bookings/${academicYear}/${adm}`).once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const booking = [];
        snapshot.forEach((childSnapshot) => {
          booking.push({
            bookingId: childSnapshot.key,
            ...childSnapshot.val()
            
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
    const {
        adm = '',
        gender='',
        hostel = '',
        room = '',
        term = '',
        date = '',
        time = ''
    } = userData;

    // check if user has already booked
    return database.ref(`bookings/${academicYear}/${adm}`).orderByChild('term').equalTo(term).once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const message = 'You have already booked room.';
        dispatch(failedBooking(message));

      } else {
        // check if user has paid the required amount
        return database.ref(`payments/${academicYear}/${adm}`).orderByChild('term').equalTo(term).once('value').then((snapshot) => {
          if (snapshot.exists()) {
            let user = {};
            snapshot.forEach((childSnapshot) => {
              user = {
                ...user,
                paymentId:childSnapshot.key,
                ...childSnapshot.val()
              }
            })
            // const amount = parseInt(user.amount, 10);
            if (user.amount >= 3500) {
              //check gender to verify the gender of student
              return database.ref(`hostels/${hostel}/hostelDetails`).once('value').then((snapshot) => {
                let hostelDetails = {
                  ...snapshot.val()
                };

                if (hostelDetails.gender == gender) {
                  // check if room capacity is full
                  return database.ref(`hostels/${hostel}/rooms/${room}`).once('value').then((snapshot) => {
                    if (snapshot.exists()) {
                      let roomDetails = {
                        ...snapshot.val()
                      };
                      // const vacantBeds = parseInt(room.vacantBeds, 10);
                      let vacantBeds = roomDetails.vacantBeds;
                      if (vacantBeds == 0) {
                        const message = 'Room is full ,choose another room.';
                        dispatch(failedBooking(message));
                      } else {
                        // BOOK ROOM
                        let booking = {
                          room,
                          date,
                          time,
                          term,
                          uid,
                          hostel
                        };
                        return database.ref(`bookings/${academicYear}/${adm}`).push(booking).then((ref) => {

                          //update number of vacantBeds after each booking
                          let newCapacity = vacantBeds - 1;
                          let update = {
                            vacantBeds: newCapacity
                          }
                          return database.ref(`hostels/${hostel}/rooms/${room}`).update(update).then(() => {
                            const message = `You have sucessfully booked room ${room}.`;
                            dispatch(successBooking(message));
                            dispatch(resetMessage());
                            history.push('/booked/success');
                          })
                        })
                      }
                    } else {
                      const message = `Room does not exist in hostel ${hostel}. `;
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


