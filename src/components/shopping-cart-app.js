import React from "react";
/*
App structure:

ShoppingCartApp
  Header
    Navigation
    ShoppingCart
  ShoppingCartOverlay
    ShoppingCartProduct
    ShoppingCartTotal
  ProductList
    Product
*/

import Header from "./header";
import ShoppingCartOverlay from "./shopping-cart-overlay";
import ProductList from "./product-list";

import { shoppingProducts } from "./../fake-data-base";

import name from "./shopping-cart.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
class ShoppingCartApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: shoppingProducts,
      quantity: 0,
      amountToPay: 0,
      itemsInCart: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  addToCart(item) {
    let itemsInCart = this.state.itemsInCart;
    itemsInCart.push(this.props.items[item.id]);
    shoppingProducts[item.id].inCart = true;
    shoppingProducts[item.id].quantityInCart = 1;
    this.setState({
      quantity: this.state.quantity + 1,
      amountToPay: this.state.amountToPay + this.props.items[item.id].price,
      itemsInCart: itemsInCart,
      items: shoppingProducts
    });
  }
  removeFromCart(item, indexInCart) {
    let itemsInCart = this.state.itemsInCart;
    shoppingProducts[item.id].inCart = false;
    shoppingProducts[item.id].quantityInCart = 0;
    itemsInCart.splice(indexInCart, 1);
    this.setState({
      quantity: this.state.quantity - 1,
      amountToPay: this.state.amountToPay - this.props.items[item.id].price,
      itemsInCart: itemsInCart,
      items: shoppingProducts
    });
  }
  render() {
    console.log(
      "ShoppingCartApp -> constructor -> shoppingProducts",
      shoppingProducts
    );
    return (
      <main>
        <Header
          quantity={this.state.quantity}
          amountToPay={this.state.amountToPay}
        />
        <ShoppingCartOverlay
          data={this.state}
          removeFromCart={this.removeFromCart}
        />
        <ProductList items={this.props.items} addToCart={this.addToCart} />
      </main>
    );
  }
}
export default ShoppingCartApp;
