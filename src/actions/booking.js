import database from '../firebase/firebase';
import AppRouter, { history } from '../routers/AppRouter';



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
export const successBooking = (booking_details) => ({
  type: 'SUCCESS_BOOKING',
  booking_details
});


// FAILED_BOOKING
export const failedBooking = (message) => ({
  type: 'FAILED_BOOKING',
  message
});



export const startViewRooms = ({hostelName}) => {
  return (dispatch, getState) => {
    // const uid = getState().auth.uid;
    return database.ref(`hostels/${hostelName}/rooms`).once('value').then((snapshot) => {
      const rooms = [];
      snapshot.forEach((childSnapshot) => {
        rooms.push({
          room_name: childSnapshot.key,
          ...childSnapshot.val()
        });
      dispatch(setRooms(rooms));
      });

    });
  };
};



export const startViewBooking = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      academicYear = ''
    } = userData;
    return database.ref(`bookings/${uid}`).orderByChild('academicYear').equalTo(academicYear).limitToFirst(1).once('value').then((snapshot) => {
      if (snapshot.exists()) {
          const booking  = [];
          snapshot.forEach((childSnapshot) => {
            booking.push({
              bookingId: childSnapshot.key,
              ...childSnapshot.val()
            });
            
          });
          dispatch(setBooking(booking));
         } else {
          const booking  = [];
          dispatch(setBooking(booking));
    }});
  };
};



export const startBookRoom = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const academicYear = getState().auth.academicYear;
    const userGender = getState().auth.userGender;
    const regNo = getState().auth.regNo;

    const {
      hostelName='',
      roomName = '',
      bookingDate='',
      bookingTime=''
    } = userData;

    // check if user has already booked
    return database.ref(`bookings/${uid}`).orderByChild('academicYear').equalTo(academicYear).limitToFirst(1).once('value').then((snapshot) => {
      if (snapshot.exists()) {
        const message='You have already booked room';
        dispatch(failedBooking(message));
        
         } else {
  // check if user has paid the required amount
  return database.ref(`payments/${uid}`).orderByChild('academicYear').equalTo(academicYear).limitToFirst(1).once('value').then((snapshot) => {
    if (snapshot.exists()) {
      let user  = {};
          snapshot.forEach((childSnapshot) => {
            user = {
              ...childSnapshot.val()
            }})
      const amount = parseInt(user.amountPaid, 10);
      if (amount >= 3500) {
          //check gender to verify the gender of student
          return database.ref(`hostels/${hostelName}/hostelDetails`).once('value').then((snapshot) => {
            const hostel  = {
              ...snapshot.val()
            };
     if (hostel.gender == userGender) {
       // check if room capacity is full
       return database.ref(`hostels/${hostelName}/rooms/${roomName}`).once('value').then((snapshot) => {
        if (snapshot.exists()) {
           const room  = {
            ...snapshot.val()
           };
      // const beds = parseInt(room.beds, 10);
      const beds = room.beds;
        if (beds == 0) {
          const message='Room is full ,choose another room';
          dispatch(failedBooking(message));
        } else {
           // BOOK ROOM
          const booking = { regNo:regNo,roomName,bookingDate,bookingTime,academicYear,hostelName };
           return database.ref(`bookings/${uid}`).push(booking).then((ref) => {

            //update number of beds after each booking
              const newCapacity = beds - 1;
              const update = {
                beds:newCapacity
              }
              return database.ref(`hostels/${hostelName}/rooms/${roomName}`).update(update).then(() => {
               const message = `You have sucessfully booked room ${roomName}`;
               dispatch(successBooking(message));
               history.push('/booked/success');
              })
           }
           )
        }
        } else {
          const message=`Room does not exist in hostel ${hostelName} `;
          dispatch(failedBooking(message));
        }
      
       })
     } else {
      const message='Room is not for your gender';
      dispatch(failedBooking(message));
     }
           } )
      } else {
        const message='You have not yet paid required amount';
        dispatch(failedBooking(message));
      }
    } else {
      const message='You have not yet paid required amount';
      dispatch(failedBooking(message));
    }
  })
    }});
  };
};

