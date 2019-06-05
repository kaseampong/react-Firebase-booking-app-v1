import React from 'react';
import { connect } from 'react-redux';
import{Container,ListGroup,ListGroupItem,Table,Row,Col} from 'reactstrap';


export const ProcedurePage = (props) => {
  return (
    <div>
      <div className="page-header">
         <h1 className="page-header__title text-center">How to Book</h1>
     </div>
<Container fluid>
<Container>
<div className="text-center mt-3">{props.reg_no}</div>
</Container>
</Container>
</div>
    
  );
};


  const mapStateToProps = (state) => {
    return {
      reg_no: state.auth.regNo
    };
  };
  
  export default connect(mapStateToProps)(ProcedurePage );
  