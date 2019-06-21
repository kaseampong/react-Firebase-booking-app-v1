import React from 'react';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import{Container,Alert,ListGroup,ListGroupItem,Table,Row,Col} from 'reactstrap';


export const RoomsPage = (props) => {
    const data = {
      columns: [
        {
          label: 'Room',
          field: 'room_name',
          sort: 'asc'
        },
        {
          label: 'Beds',
          field: 'beds',
          sort: 'asc'
        },
        {
          label: 'Gender',
          field: 'gender',
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
<div className="text-center mt-3 mb-3">{props.reg_no}</div>
{
      data.rows.length === 0 ? (
          <Alert color="primary" className="text-center mt-2">
          No rooms available.
      </Alert>
        ) : 
        (
   
    <MDBDataTable
      striped
      hover
      data={data}
    />
  
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
  