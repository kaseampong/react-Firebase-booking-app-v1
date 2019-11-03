import React from 'react';
import { connect } from 'react-redux';
import{Container} from 'reactstrap';
import PageHeader from './PageHeader';


export const ProcedurePage = (props) => {
  return (
    <div>
        <PageHeader title='How to Book'/>
<Container fluid>
<Container>
<div className="text-center mt-3">{props.adm}</div>
</Container>
</Container>
</div>
    
  );
};


  const mapStateToProps = (state) => {
    return {
      adm: state.auth.adm
    };
  };
  
  export default connect(mapStateToProps)(ProcedurePage );
  