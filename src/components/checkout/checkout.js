import React, { Component } from "react";

import { ValidatedForm } from "./forms/validated-form";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.defaultAttrs = { type: "text", required: true };
    this.formModel = [
      { label: "Name" },
      { label: "Email", attrs: { type: "email" } },
      { label: "Address" },
      { label: "City" },
      { label: "Zip/Postal Code", name: "zip" },
      { label: "Country" }
    ];
  }

  closeCheckoutForm = () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("checkoutform").style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  };

  handleSubmit = formData => {
    const order = {
      ...formData,
      products: this.props.cart.map(item => ({
        quantity: item.quantity,
        product_id: item.product.id
      }))
    };
    this.props.placeOrder(order);
    this.props.clearCart();
    this.props.history.push("/shop/thanks");
  };

  handleCancel = () => {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("checkoutform").style.display = "none";
    document.querySelector("body").style.overflow = "hidden";
  };

  render() {
    return (
      <div id="checkoutform">
        <section id="shopping-cart">
          <div className="container-fluid">
            <div className="row">
              <div className="col bg-dark text-white">
                <div id="cart-header">
                  <span id="cart-title">Checkout</span>
                  <i
                    className="far fa-times-circle"
                    onClick={this.closeCheckoutForm}
                  ></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col m-2">
                <ValidatedForm
                  formModel={this.formModel}
                  defaultAttrs={this.defaultAttrs}
                  submitCallback={this.handleSubmit}
                  cancelCallback={this.handleCancel}
                  submitText="Place Order"
                  cancelText="Return to Cart"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export { Checkout };
