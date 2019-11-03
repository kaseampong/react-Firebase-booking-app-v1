import React from 'react';
import { connect } from 'react-redux';
import PaymentListItem from './PaymentListItem';

export const PaymentList = ({academicYear,amount}) => (
  <div className="content-container mt-4">
    <div className="list-header">
      <div className="show-for-mobile">Amount Paid</div>
      <div className="show-for-desktop">Academic Year</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
    <PaymentListItem  academiYear={academicYear}  amount={amount}/>
     
    </div>
  </div>
);


const mapStateToProps = (state) => {
  return {
    academicYear: state.hostel.academicYear,
    amount:state.payment.amount
  };
};

export default connect(mapStateToProps)(PaymentList);
