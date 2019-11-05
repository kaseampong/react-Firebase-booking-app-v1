export default (bookings) => {
    return bookings
        .map((item) => (
           {
                term:item.term,
                hostel:item.hostel,
                room:item.room,
                date:item.date
            }
        ))
  };
  