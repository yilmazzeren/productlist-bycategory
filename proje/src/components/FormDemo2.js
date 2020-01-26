import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " Added to db!");
    let form = document.getElementsByTagName("Form")[0]
    form[0].value=""
    let form1 = document.getElementsByTagName("Form")[0]
    form1[1].value=""
    let form2 = document.getElementsByTagName("Form")[0]
    form2[2].value=""

   
    
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password">password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Descriptions</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter description"
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" name="city" id="city" onChange = {this.handleChange}>
                <option>Ankara</option>
                <option>İstanbul</option>
                <option>İzmir</option>
                <option>Antalya</option>
                <option>Adana</option>               
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
