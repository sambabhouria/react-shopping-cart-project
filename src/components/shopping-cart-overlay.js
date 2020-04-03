import React, { Fragment } from "react";

import ShoppingCartProduct from "./shopping-cart-product";
import { Checkout } from "./checkout";
import { Contact } from "./contact";
class ShoppingCartOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.updateAmountToPay = this.updateAmountToPay.bind(this);
    this.showCheckoutFrom = this.showCheckoutFrom.bind(this);
  }
  showCheckoutFrom() {
    document.getElementById("checkoutform").style.display = "flex";
    document.getElementById("overlay").style.display = "none";
    document.querySelector("body").style.overflow = "hidden";
  }

  closeOverlay() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("checkoutform").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  }
  updateAmountToPay(item) {
    this.forceUpdate();
  }
  render() {
    let itemsInCart = this.props.data.itemsInCart.map((item, index) => {
      // Return key which defines an order of items inside a cart. The order in a cart is different than in database
      return (
        <ShoppingCartProduct
          key={index}
          item={item}
          indexInCart={index}
          removeFromCart={this.props.removeFromCart}
          updateAmountToPay={this.updateAmountToPay}
        />
      );
    });
    let amountToPay = 0;
    for (let i = 0; i < this.props.data.items.length; i++) {
      amountToPay +=
        this.props.data.items[i].price *
        this.props.data.items[i].quantityInCart;
    }
    return (
      <Fragment>
        <div id="overlay">
          <section id="shopping-cart">
            <div id="cart-header">
              <span id="cart-title">Shopping Cart</span>
              <i
                className="far fa-times-circle"
                onClick={this.closeOverlay.bind(this)}
              ></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{itemsInCart}</tbody>
            </table>
            <span id="empty-cart">
              {itemsInCart.length === 0 ? "Shopping cart is empty" : ""}
            </span>
            <h3 id="cart-total">Cart Total</h3>
            <div id="totals">
              <span>Cart Totals</span>
              <span>Number of items: {this.props.data.quantity}</span>
              <span>Total: £{amountToPay}</span>
            </div>
            <button
              id="checkout"
              disabled={itemsInCart.length === 0 ? true : false}
              onClick={this.showCheckoutFrom}
            >
              Checkout
            </button>
          </section>
        </div>
        <Checkout />
        <Contact />
      </Fragment>
    );
  }
}

export default ShoppingCartOverlay;
