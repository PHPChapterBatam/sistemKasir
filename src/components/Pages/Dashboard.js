import React, { Component } from 'react'



import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import HeaderMobile from "../layouts/HeaderMobile";
import ProductList from "./product/Productlist";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <HeaderMobile />
        <Sidebar />
        <Header />
        <div>
          <ProductList />
        </div>
      </div>
    )
  }
}
