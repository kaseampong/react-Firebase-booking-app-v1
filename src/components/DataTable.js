import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Hostel Name',
        field: 'hostel_name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Beds',
        field: 'beds',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 200
      }
     
    ],
    rows: props.rooms.map((room) => {room.hostel_name,room.beds,room.gender})
  };

  return (
    <MDBDataTable
      striped
      hover
      data={data}
    />
  );
}

export default DatatablePage;