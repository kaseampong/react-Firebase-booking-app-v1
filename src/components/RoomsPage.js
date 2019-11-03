import React from 'react';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';
import{Container,Alert} from 'reactstrap';
import PageHeader from './PageHeader';

export const RoomsPage = (props) => {
    const data = {
      columns: [
        {
          label: 'Room',
          field: 'room',
          sort: 'asc'
        },
        {
          label: 'Gender',
          field: 'gender',
          sort: 'asc'
        },
        {
          label: 'Room Type',
          field: 'roomType',
          sort: 'asc'
        },
        {
          label: 'Vacant Beds',
          field: 'vacantBeds',
          sort: 'asc'
        }
      
      ],
      rows: props.hostel.rooms.map((room) => room)
       
    };
  
  return (
    <div>
        <PageHeader title={`Hostel ${props.hostel.hostel}` || 'Rooms'}/>

<Container fluid>
<Container>
<div className="text-center mt-3 mb-4">{props.adm}</div>
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
      hostel: state.hostel,
      adm:state.auth.adm
    };
  };
  
  export default connect(mapStateToProps)(RoomsPage);
  