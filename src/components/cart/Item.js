import React from 'react';
import { formatCurrency } from '../../libs/currency.js';
import '../../styles/cart/item.css';
import '../../styles/common/button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ id, name, price, qty, removeItem, setItemQty }) => {
  return (
    <div id={ id } className="item">
      <div className="item__name">{ name }</div>
      <div className="item__price">{ formatCurrency(price) }</div>
      <div className="item__qty-box qty-box">
        <button
          className="qty-box__dec button button--qty"
          onClick={ () => setItemQty({ id, qty: qty - 1 }) }
        >-</button>

        <input
          id={ id }
          type="number"
          value={ qty }
          onChange={ (evt) => setItemQty({ id, qty: evt.target.value }) }
        />

        <button
          className="qty-box__inc button button--qty"
          onClick={ () => setItemQty({ id, qty: qty + 1 }) }
        >+</button>
      </div>

      <button className="item__remove" onClick={ () => removeItem(id) }>
        <FontAwesomeIcon icon="times" size="2x" />
      </button>
    </div>
  );
};

export default Item;
