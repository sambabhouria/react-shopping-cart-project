import React, { Component } from "react";

export class Thanks extends Component {
  closeThanks = () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("thanks").style.display = "none";
    document.getElementById("checkoutform").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  };

  render() {
    return (
      <div id="thanks">
        <section id="shopping-cart">
          <div className="container-fluid">
            <div className="row">
              <div className="col bg-dark text-white">
                <div id="cart-header">
                  <span id="cart-title">Thanks Hope To See you Soon</span>
                  <i
                    className="far fa-times-circle"
                    onClick={this.closeThanks}
                  ></i>
                </div>
              </div>
            </div>
            <div className="m-2 text-center">
              <h2>Thanks!</h2>
              <p>Thanks for placing your order.</p>
              <p>Your order is #{this.props.order ? this.props.order.id : 0}</p>
              <p>We'll ship your goods as soon as possible.</p>
              <button className="btn btn-primary" onClick={this.closeThanks}>
                Return to Store
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
