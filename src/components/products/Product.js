import React from 'react';
import { formatCurrency } from '../../libs/currency.js';
import '../../styles/products/product.css';
import '../../styles/common/button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ id, name, price, mediaUrl, addToCart }) => {
  return (
    <article id={ id } className="product">
      <img className="product__img" src={ mediaUrl } alt="Product description" />
      <div className="product__wrapper">
        <div className="product__name">{ name }</div>
        <div className="product__price">{ formatCurrency(price) }</div>
        <button
          className="product__add button"
          onClick={ () => addToCart({ id, name, price, qty: 1 }) }
        >
          <span>Add to cart</span>
          <FontAwesomeIcon icon="cart-plus" size="1x" />
        </button>
      </div>
    </article>
  );
};


export default Product;
