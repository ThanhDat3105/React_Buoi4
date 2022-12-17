import React, { Component } from "react";
import ProductList from "../BaiTapGiay/ProductList";
import GioHang from "./GioHang";
import data from "../../data/data.json";

export default class ShoesStore extends Component {
  state = {
    phoneDetail: data[0],
    card: [],
  };

  addToCard = (phone) => {
    // console.log(phone);
    // this.state.card.push(phone);

    const data = [...this.state.card];

    // kiem san pham da ton tai trong gio hang hay chua
    const idx = data.findIndex((element) => element.id === phone.id);

    // idx === -1 la khong co phone hien tai trong gio hang
    if (idx === -1) {
      data.push({ ...phone, soLuong: 1 });
    } else {
      data[idx].soLuong += 1;
    }

    this.setState({
      card: data,
    });
  };

  handleQuantity = (phone, isIncrease) => {
    // console.log(phone);
    // console.log(isIncrease);

    const data = [...this.state.card];

    const idx = data.findIndex((element) => element.id === phone.id);

    if (isIncrease) {
      data[idx].soLuong += 1;
    } else {
      if (data[idx].soLuong > 1) {
        data[idx].soLuong -= 1;
      } else if (window.confirm("Bạn có muốn xóa sản phẩm này")) {
        data.splice(idx, 1);
      }
    }
    this.setState({
      card: data,
    });
  };

  deletePhone = (phone) => {
    const data = [...this.state.card];

    const idx = data.findIndex((element) => element.id === phone.id);

    data.splice(idx, 1);

    this.setState({ card: data });
  };

  render() {
    return (
      <div>
        <GioHang
          card={this.state.card}
          handleQuantity={this.handleQuantity}
          deletePhone={this.deletePhone}
        />
        <ProductList addToCard={this.addToCard} />
      </div>
    );
  }
}
