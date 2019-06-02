import React from 'react';
import { ListGroupItem  } from 'reactstrap';

 
const Booking  = ({bookingId,hostelName,roomName,bookingDate,academicYear}) => (
    
    <ListGroupItem xs={11}>
    <div className=''>
    <div  className='font-weight-bold'>Booking Id</div><div>{bookingId}</div>
    </div>
    <div className=''>
    <div  className='font-weight-bold'>Hostel Name</div><div>{hostelName}</div>
    </div>
    <div className=''>
    <div  className='font-weight-bold'>Room name</div><div>{roomName}</div>
    </div>
    <div className=''>
    <div  className='font-weight-bold'>Booking date</div><div>{bookingDate}</div>
    </div>
    <div className=''>
    <div  className='font-weight-bold'>Academic Year</div><div>{academicYear}</div>
    </div>
   
  </ListGroupItem>
  
);

export default Booking;