import React, { Component } from "react";
import Navi from "./components/Navi";
import Category from "./components/Category";
import Product from "./components/Product";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import CartList from "./components/CartList";
import FormDemo1 from "./components/FormDemo1";
import FormDemo2 from "./components/FormDemo2";

export default class App extends Component {
  componentDidMount() {
    this.getProduct();
  }
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProduct(category.id);
  };

  getProduct = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(err => console.log(err));
  };

  addToCart = product => {
    let newCart = this.state.cart;
    var addItem = newCart.find(cartItem => cartItem.product.id === product.id);
    if (addItem) {
      addItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " Added", 2);
  };

  removeFromCart = product => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart", 2);
  };

  render() {
    return (
      <div>
        <Container>
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
            title="Navbar Kısmı"
          />
          <Row>
            <Col xs="3">
              <Category
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
                title="Category Kısmı"
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Product
                      {...props}
                      products={this.state.products}
                      currentCategory={this.state.currentCategory}
                      title="Product Kısmı"
                      addToCart={this.addToCart}
                    />
                  )}
                ></Route>
                <Route
                  exact
                  path="/cart"
                  render={props => <CartList 
                    {...props} 
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                    />}
                ></Route>
                <Route path ="/form1" component = {FormDemo1}></Route>
                <Route path ="/form2" component = {FormDemo2}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
