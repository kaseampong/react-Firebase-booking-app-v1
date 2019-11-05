  export default (rooms) => {
    return rooms
        .map((item) => (
           {
                room:item.room,
                vacantBeds:item.vacantBeds,
                gender:item.gender,
                roomType:item.roomType
            }
        ))
  };