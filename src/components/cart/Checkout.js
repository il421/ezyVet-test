import React from 'react';

import myPhoto from '../../assets/img/my-photo.png';
import '../../styles/cart/checkout.css';
import '../../styles/common/button.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Checkout = ({ handleDisplayCheckoutModal }) => {
  return (
    <div className="checkout">
      <button className="checkout__close" onClick={ () => handleDisplayCheckoutModal() }>
        <FontAwesomeIcon icon="times" size="2x" />
      </button>

      <div className="checkout__wrapper">
        <div className="checkout__desc">
          <h2>Suglobov Ilya</h2>
          <div>I used:</div>
          <ul>
            <li>React, Create React App (I can also use Webpack to build, and optimize projects)</li>
            <li>Redux, Redux-Persist, Redux-Thunk</li>
            <li>HTML5, CSS3 (usually I use SCSS, for the project with simple styles it is not necessary)</li>
            <li>Jest, Enzyme</li>
          </ul>
          <div>Thank you!</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
