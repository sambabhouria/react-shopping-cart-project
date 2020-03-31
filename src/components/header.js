import React from "react";

import Navigation from "./navigation";
import ShoppingCart from "./shopping-cart";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navigation />
        <ShoppingCart
          quantity={this.props.quantity}
          amountToPay={this.props.amountToPay}
        />
      </header>
    );
  }
}

export default Header;
