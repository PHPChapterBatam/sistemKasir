import React, { Component } from 'react'

 class ProductList extends Component {
  render() {
       const products = this.props.products.map(product => (
          <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.item}</td>
              <td>{product.price}</td>
              <td>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
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

export default ProductList;