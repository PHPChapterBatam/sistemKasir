import React, { Component } from 'react'
import { connect } from "react-redux";
import { TextFieldForm } from "../../utils/FormComponent";

 class ProductCreate extends Component {
  render() {
    return (
      <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">Credit Card</div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="text-center title-2">Pay Invoice</h3>
                            </div>
                            <hr />
                            <form action method="post" noValidate="novalidate">
                                <div className="form-group">
                                    <label htmlFor="cc-payment" className="control-label mb-1">Payment amount</label>
                                    <input id="cc-pament" name="cc-payment" type="text" className="form-control" aria-required="true" aria-invalid="false" defaultValue={100.00} />
                                </div>
                                <div className="form-group has-success">
                                    <label htmlFor="cc-name" className="control-label mb-1">Name on card</label>
                                    <input id="cc-name" name="cc-name" type="text" className="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autoComplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error" />
                                    <span className="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cc-number" className="control-label mb-1">Card number</label>
                                    <input id="cc-number" name="cc-number" type="tel" className="form-control cc-number identified visa" defaultValue data-val="true" data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number" autoComplete="cc-number" />
                                    <span className="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true" />
                                </div>
                                <div>
                                    <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                    Create Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div></div>

      </div>
    )
  }
}

export default connect()(ProductCreate);