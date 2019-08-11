import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import Item from './Item.js';
import Checkout from './Checkout.js';
import Totals from './Totals.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeItem, setItemQty, removeAllItems } from '../../actions/cart.js';

import '../../styles/common/button.css';
import '../../styles/cart/cart.css';
import '../../styles/cart/modal.css';

export class Cart extends Component {

  state = {
    displayCheckoutModal: false
  }

  handleDisplayCheckoutModal = (active) => {
    this.setState(() => ({
      displayCheckoutModal: active
    }));
  }

  render() {
    return (
      <section className="cart">
        <div className="cart__wrapper">
          <div className="cart__actions actions">
            <button
              className="actions__checkout button"
              onClick={ () => this.handleDisplayCheckoutModal(true) }
            >
              Checkout
            </button>
            <button
              className="actions__trash button"
              onClick={ this.props.removeAllItems }
            >
              <FontAwesomeIcon icon="trash-alt" size="1x" />
            </button>
          </div>

          <div>
            {
              this.props.cart.map((item, index) => (
                <Item
                  {...item}
                  key={ index }
                  removeItem={ this.props.removeItem }
                  setItemQty={ this.props.setItemQty }
                />
              ))
            }
          </div>
        </div>

        <Totals cart={ this.props.cart }/>

        <Modal
          isOpen={ this.state.displayCheckoutModal }
          onRequestClose={ () => this.handleDisplayCheckoutModal(false) }
          closeTimeoutMS={ 200 }
          className="modal"
          ariaHideApp={ false }
        >
          <Checkout handleDisplayCheckoutModal={ () => this.handleDisplayCheckoutModal(false) } />
        </Modal>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    removeItem: (id) => dispatch(removeItem(id)),
    setItemQty: ({id, qty}) => dispatch(setItemQty({id, qty})),
    removeAllItems: () => dispatch(removeAllItems())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
