import React, { Component } from 'react'
import {connect} from "react-redux";
import { deleteProduct} from "../../../redux/actions/ProductActions";
import {Link} from "react-router-dom";

 class ProductList extends Component {

    handleClick = (id) => {
        this.props.deleteProduct(id)
    }


  render() {
       const products = this.props.products.map(product => (
          <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.item}</td>
              <td>{product.price}</td>
              <td>
                   <Link to={`/product-edit/${product.id}`} className="btn btn-primary">Edit</Link>
                  <button className="btn btn-danger" onClick={() => this.handleClick(product.id)}>Delete</button>
              </td>
          </tr>
       ))
    return (
      <div>
            <table className="table table-borderless table-data3">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Product</th>
                        <th>Price</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products}
                </tbody>
            </table>
      </div>
    )
  }
}

export default connect(null, { deleteProduct })(ProductList);