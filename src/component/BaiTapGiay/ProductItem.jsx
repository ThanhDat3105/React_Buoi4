import React, { Component } from "react";
import Modal from "./Modal";

export default class ProductItem extends Component {
  showDescription = (description) => {
    alert(description);
  };
  render() {
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.element.image}
            alt="#"
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.element.name}</h4>
            <p className="card-price">{this.props.element.price}$</p>
            <button
              onClick={() =>
                this.showDescription(this.props.element.description)
              }
              className="btn btn-primary"
            >
              Xem Chi Tiết
            </button>
            <button
              onClick={() => this.props.addToCard(this.props.element)}
              className="btn btn-dark"
            >
              Thêm Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
