import React from 'react';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import{Container,Alert,ListGroup,ListGroupItem,Table,Row,Col} from 'reactstrap';

export const RoomsPage = (props) => {
    const data = {
      columns: [
        {
          label: 'Room',
          field: 'Room_name',
          sort: 'asc'
        },
        {
          label: 'Beds',
          field: 'Beds',
          sort: 'asc'
        },
        {
          label: 'Gender',
          field: 'Gender',
          sort: 'asc'
        },
        {
          label: 'Room_type',
          field: 'Room_type',
          sort: 'asc'
        }
      
      ],
      rows: props.rooms.map((room) => room)
       
    };
  
  return (
    <div>
      <div className="page-header">
         <h1 className="page-header__title text-center">Rooms</h1>
     </div>
<Container fluid>
<Container>
<div className="text-center mt-3 mb-4">{props.reg_no}</div>
{
      data.rows.length === 0 ? (
          <Alert color="primary" className="text-center mt-2">
          No rooms available.
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
      rooms: state.hostel.rooms,
      reg_no:state.auth.regNo
    };
  };
  
  export default connect(mapStateToProps)(RoomsPage);
  