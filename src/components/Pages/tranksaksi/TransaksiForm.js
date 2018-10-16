import React, { Component } from 'react'

export default class TransaksiForm extends Component {
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
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="cc-exp" className="control-label mb-1">Expiration</label>
                                            <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp" defaultValue data-val="true" data-val-required="Please enter the card expiration" data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" autoComplete="cc-exp" />
                                            <span className="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="x_card_code" className="control-label mb-1">Security code</label>
                                        <div className="input-group">
                                            <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc" defaultValue data-val="true" data-val-required="Please enter the security code" data-val-cc-cvc="Please enter a valid security code" autoComplete="off" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                        <i className="fa fa-lock fa-lg" />&nbsp;
              <span id="payment-button-amount">Pay $100.00</span>
                                        <span id="payment-button-sending" style={{ display: 'none' }}>Sending…</span>
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
