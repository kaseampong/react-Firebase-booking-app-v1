import React from 'react';
import { connect } from 'react-redux';
import{Container,ListGroup,ListGroupItem,Table,Row,Col} from 'reactstrap';


export const ProcedurePage = (props) => {
  return (
<Container fluid>
<Container>

<h4 className="text-center form__header mt-3">How To Book</h4>
<div className="text-center mt-3">{props.reg_no}</div>

</Container>
</Container>
    
  );
};


  const mapStateToProps = (state) => {
    return {
      reg_no: state.auth.regNo
    };
  };
  
  export default connect(mapStateToProps)(ProcedurePage );
  