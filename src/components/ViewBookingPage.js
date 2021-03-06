import React from 'react';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import{Container,Alert} from 'reactstrap';
import PageHeader from './PageHeader';
import selectBooking from '../selectors/booking';

export const ViewBookingPage = (props) => {
    const data = {
      columns: [
        {
          label: 'Session Booked',
          field: 'term',
          sort: 'asc'
        },
        {
          label: 'Hostel',
          field: 'hostel',
          sort: 'asc'
        },
        {
          label: 'Hostel Room',
          field: 'room',
          sort: 'asc'
        },
        {
          label: 'Date Booked',
          field: 'date',
          sort: 'asc'
        }
      
      
      ],
      rows: props.booking.map((booking) => booking)
       
    };
  
  return (
    <div>
<PageHeader title={data.rows.length === 0 ? 'Booking' :`Booking for ${props.academicYear}` }/>
<Container fluid>
<Container>
<div className="text-center mt-3 mb-4">{props.adm}</div>
{
      data.rows.length === 0 ? (
          <Alert color="primary" className="text-center mt-2">
          No booking available for academic year <span>{props.academicYear}</span>.
      </Alert>
        ) : 
        (
<Container fluid className="content-container mt-2 ">
    <MDBDataTable
      striped
      hover
      data={data}
      responsiveSm
      className="data-table"
    />
</Container>
  )
      } 
</Container>
</Container>
  </div>

  );
};

  const mapStateToProps = (state) => {
    return {
      booking: selectBooking(state.booking.bookings),
      adm:state.auth.adm,
      academicYear:state.auth.academicYear
    };
  };
  
  export default connect(mapStateToProps)(ViewBookingPage);
  
  
  