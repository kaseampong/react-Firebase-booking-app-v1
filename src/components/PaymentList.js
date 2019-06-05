import React from 'react';
import { connect } from 'react-redux';
import PaymentListItem from './PaymentListItem';

export const PaymentList = ({academicYear,amountPaid}) => (
  <div className="content-container mt-4">
    <div className="list-header">
      <div className="show-for-mobile">Amount Paid</div>
      <div className="show-for-desktop">Academic Year</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    <PaymentListItem  academiYear={academicYear}  amount={amountPaid}/>
     
    </div>
  </div>
);


const mapStateToProps = (state) => {
  return {
    academicYear: state.auth.academicYear,
    amountPaid:state.payment.amountPaid
  };
};

export default connect(mapStateToProps)(PaymentList);
