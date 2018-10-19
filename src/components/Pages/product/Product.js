import React, { Component } from 'react'
import {connect} from "react-redux";
import Dashboard from "../../layouts/Dashboard";

export default class Product extends Component {
  render() {
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
                      {/* DATA TABLE*/}
                      <div className="table-responsive m-b-40">
                        <table className="table table-borderless table-data3">
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Nama Product</th>
                              <th>Price</th>
                              <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2018-09-29 05:57</td>
                              <td>Mobile</td>
                              <td>iPhone X 64Gb Grey</td>
                              <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                              </td>
                            </tr>
                            <tr>
                              <td>2018-09-29 05:57</td>
                              <td>Mobile</td>
                              <td>iPhone X 64Gb Grey</td>
                              <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
