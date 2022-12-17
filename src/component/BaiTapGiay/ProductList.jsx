import React, { Component } from "react";
import data from "../../data/data.json";

import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderShoes = () => {
    return data.map((element) => {
      return (
        <div key={element.id} className="col-4">
          <ProductItem element={element} addToCard={this.props.addToCard} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="row">{this.renderShoes()}</div>
      </div>
    );
  }
}
