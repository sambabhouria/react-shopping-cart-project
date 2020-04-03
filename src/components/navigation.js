import React, { Component } from "react";

class Navigation extends Component {
  closeCheckoutForm = () => {
    document.getElementById("checkoutform").style.display = "none";
    document.querySelector("body").style.overflow = "hidden";
  };

  render() {
    return (
      <nav>
        <a href="#">Home</a>
        <a onClick={this.closeCheckoutForm} href="#">
          Contact
        </a>
      </nav>
    );
  }
}
export default Navigation;
