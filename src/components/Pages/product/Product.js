import React, { Component } from 'react'
import {connect} from "react-redux";

export default class Product extends Component {
  render() {
    return (
      <div>
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
                              <th>date</th>
                              <th>type</th>
                              <th>description</th>
                              <th>status</th>
                              <th>price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2018-09-29 05:57</td>
                              <td>Mobile</td>
                              <td>iPhone X 64Gb Grey</td>
                              <td className="process">Processed</td>
                              <td>$999.00</td>
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
