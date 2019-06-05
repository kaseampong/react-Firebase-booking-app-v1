import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const PaymentListItem = (props) => (
  <Link className="list-item" to={`/payment/${props.academiYear}`}>
    <div>
      {/* <h3 className="list-item__title">{description}</h3> */}
      <span className="list-item__sub-title">{props.academiYear}</span>
    </div>
    {/* <h3 className="list-item__data">{numeral(props.amount / 100).format('$0,0.00')}</h3> */}
    <h3 className="list-item__data">Ksh{props.amount}.00</h3>

  </Link>
);
export default PaymentListItem;

