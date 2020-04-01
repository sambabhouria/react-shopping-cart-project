import React from "react";
class ShoppingCartProduct extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }
  handleRemoveFromCart(e) {
    this.props.removeFromCart(this.props.item, this.props.indexInCart);
  }
  handleQuantityChange(e) {
    this.props.item.quantityInCart = e.target.value;
    // Update total value
    this.forceUpdate();
    this.props.updateAmountToPay(this.props.item);
  }
  render() {
    return (
      <tr className="items-in-cart">
        <td>
          <img src={this.props.item.image}></img>
        </td>
        <td>{this.props.item.name}</td>
        <td>£{this.props.item.price}</td>
        <td>
          <input
            type="number"
            name="quantity"
            defaultValue="1"
            min="1"
            max="10"
            onChange={this.handleQuantityChange}
          />
        </td>
        <td>£{this.props.item.price * this.props.item.quantityInCart}</td>
        <td>
          <i className="fas fa-trash" onClick={this.handleRemoveFromCart}></i>
        </td>
      </tr>
    );
  }
}

export default ShoppingCartProduct;
