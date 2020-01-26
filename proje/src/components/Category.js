import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class Category extends Component {
  componentDidMount() {
    this.getCategory();
  }
  state = {
    categories: [],
  };
 

  getCategory = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h3> {this.props.title}</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem 
            active = {this.props.currentCategory===category.categoryName?true:false}
            onClick = {() => this.props.changeCategory(category)} key ={category.id}>{category.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
          <h3>{this.props.currentCategory}</h3>
      </div>
    );
  }
}
