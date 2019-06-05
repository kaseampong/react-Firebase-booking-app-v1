import React from 'react';
import PaymentList from './PaymentList';
import PaymentSummary from './PaymentSummary';

const PaymentDashboardPage = () =>(
  <div>
    <PaymentSummary />
    <PaymentList className="mt-4" />
  </div>
);

export default PaymentDashboardPage;
