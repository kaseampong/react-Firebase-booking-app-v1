import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export const PaymentSummary = ({ academicYear }) => {

  return (
    <div className="page-header">
      <div className="content-container">
        <h3 className="page-header__title ">Viewing amount paid for academic year <span>{academicYear}</span></h3>
        <div className="page-header__actions">
          <Link className="button" to="/paymentForm">Make Payment</Link>
        </div>
        </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    academicYear: state.hostel.academicYear
  };
};

export default connect(mapStateToProps)(PaymentSummary);
