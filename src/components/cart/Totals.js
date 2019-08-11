import React, { Component } from 'react';
import { formatCurrency } from '../../libs/currency.js';
import '../../styles/cart/totals.css';

export class Totals extends Component {

  getTotalAmount = (cart) => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      total += item.price * item.qty;

    }
    return formatCurrency(total);
  }

  render() {
    return (
      <div className="totals">
        <div>Totals: { this.getTotalAmount(this.props.cart) }</div>
      </div>
    );
  }
}

export default Totals;
