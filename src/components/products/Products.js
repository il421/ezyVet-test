import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../actions/cart.js';

import '../../styles/products/products.css';

import Product from './Product.js';

export class Products extends Component {

  products = [
    {
      id: 1,
      name: 'Sledgehammer',
      price: 125.75,
      mediaUrl: 'http://placehold.it/200x200'
    },
    {
      id: 2,
      name: 'Axe',
      price: 190.50,
      mediaUrl: 'http://placehold.it/200x200'
    },
    {
      id: 3,
      name: 'Bandsaw',
      price: 562.13,
      mediaUrl: 'http://placehold.it/200x200'
    },{
      id: 4,
      name: 'Chisel',
      price: 12.9,
      mediaUrl: 'http://placehold.it/200x200'
    },
    {
      id: 5,
      name: 'Hacksaw',
      price: 18.45,
      mediaUrl: 'http://placehold.it/200x200'
    }
  ];

  render() {
    return (
      <section className="products">
        {
          this.products.map((product) => (
            <Product
              key={ product.id }
              { ...product }
              addToCart={ this.props.addItemToCart }
            />
          ))
        }
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    addItemToCart: ({id, name, price, qty}) => dispatch(addItemToCart({id, name, price, qty}))
  }
);

export default connect(undefined, mapDispatchToProps)(Products);
