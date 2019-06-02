import React from 'react';

 
const Room  = ({room_name,beds}) => (
    <tr>
            <th scope="row"></th>
            <td>{room_name}</td>
            <td>{beds}</td>
          </tr>
  
);

export default Room;

