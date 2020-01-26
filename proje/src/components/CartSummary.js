import React, { Component } from "react";
import { Dropdown, Badge, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';
export default class CartSummary extends Component {
  renderSummary() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Your Cart
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {this.props.cart.map((cartItem, i) => (
            <Dropdown.Item key={i} href="#/action-1">
                <Badge onClick={()=>this.props.removeFromCart(cartItem.product)} variant="danger">X</Badge>
              {cartItem.product.productName}
              <Badge variant="info">{cartItem.quantity}</Badge>
            </Dropdown.Item>
          ))}
          <Dropdown.Item eventKey="4">
            <Link to="cart">Go to cart</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  renderEmptyCart() {
      return (
      <Nav.Item>
          <Nav.Link>Empty Cart</Nav.Link>
      </Nav.Item>
      )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
      </div>
    );
  }
}
