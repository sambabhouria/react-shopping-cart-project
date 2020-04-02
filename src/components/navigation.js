import React, { Component } from "react";

class Navigation extends Component {
  closeCheckoutForm = () => {
    document.getElementById("contactus").style.display = "flex";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    document.getElementById("checkoutform").style.display = "none";
    document.querySelector("body").style.overflow = "hidden";
  };

  render() {
    return (
      <nav>
        <a href="#">Home</a>
        <a href="#">Browse</a>
        <a onClick={this.closeCheckoutForm} href="#">
          Contact
        </a>
      </nav>
    );
  }
}
export default Navigation;
