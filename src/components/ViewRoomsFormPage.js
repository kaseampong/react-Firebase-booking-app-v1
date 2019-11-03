import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import ViewRoomsForm from './ViewRoomsForm';
import PageHeader from './PageHeader';

import { startViewRooms } from '../actions/booking';


export  class ViewRoomsFormPage extends React.Component {
  onSubmit = (details) => {
    this.props.startViewRooms(details).then( () => {
    this.props.history.push('/rooms');
      }
    );

  };
  render() {
    return (
      <div>
        <PageHeader title='View Rooms'/>
  <Container fluid >
  <div className="text-center mt-3">{this.props.adm}</div>

        <Row  >
        <Col
        className="mt-4 pt-2"
        sm={{ size: 10, offset: 1 }}
        md={{ size: 6, offset: 3 }}
        >
          <ViewRoomsForm
           onSubmit={this.onSubmit}
          />
           </Col>
           </Row>
        </Container>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adm:state.auth.adm
  };
};

const mapDispatchToProps = (dispatch) => ({
  startViewRooms: (details) => dispatch(startViewRooms(details))
});

export default connect(mapStateToProps,mapDispatchToProps)(ViewRoomsFormPage);
