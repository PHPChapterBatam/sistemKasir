import React, { Component } from 'react'
import {connect} from "react-redux";
import Dashboard from "../../layouts/Dashboard";
import { getProducts } from "../../../redux/actions/ProductActions";
import ProductList from "./Product-list";
import {Link} from "react-router-dom";


 class Product extends Component {

  componentDidMount(){
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.product;
    return (
      <div>
        <Dashboard />
        <div>
          <div className="page-container">
            {/* MAIN CONTENT*/}
            <div className="main-content">
              <div className="section__content section__content--p30">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <Link to="/product-create" className="au-btn au-btn-icon au-btn--green au-btn--small mb-3">
                        Add Item
                       </Link>
                      {/* DATA TABLE*/}
                      <div className="table-responsive m-b-40">
                        <ProductList products={products} />
                      </div>
                      {/* END DATA TABLE*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END MAIN CONTENT*/}
            {/* END PAGE CONTAINER*/}
          </div>
        </div>
      </div>
    )
  }
}
const MapStateToProps  = state => {
  return {
    product: state.product
  }
}
export default connect(MapStateToProps, { getProducts})(Product);