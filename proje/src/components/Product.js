import React, { Component } from "react";
import { Table, Button } from "reactstrap";
export default class Product extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.title}-{this.props.currentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün İsmi</th>
              <th>Fiyatı</th>
              <th>Stok Adeti</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key ={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={()=>this.props.addToCart(product)}
                    outline
                    color="info"
                  >
                    Ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
