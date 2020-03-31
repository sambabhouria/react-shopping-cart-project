import React from "react";
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }
  handleAddToCart(e) {
    this.props.addToCart(this.props.item);
  }
  render() {
    return (
      <div className="items">
        <img src={this.props.item.image}></img>
        <div className="info">
          <h3>{this.props.item.name}</h3>
          <span>£ {this.props.item.price}</span>
          <button
            onClick={this.handleAddToCart}
            disabled={this.props.item.inCart}
            className={this.props.item.inCart ? "button-disabled" : ""}
          >
            {this.props.item.inCart ? "Item in a cart" : "Add to cart"}
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
