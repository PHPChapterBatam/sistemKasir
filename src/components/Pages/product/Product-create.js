import React, { Component } from 'react'
import { connect } from "react-redux";
import { TextFieldForm } from "../../utils/FormComponent";
import Dashboard from "../../layouts/Dashboard";
import { addProduct} from "../../../redux/actions/ProductActions";
import { withRouter } from 'react-router-dom';

 class ProductCreate extends Component {
     state = {
         item: '',
         price: ''
     }
     HandleSubmit = (e) => {
         e.preventDefault();
         const newItem = {
             item : this.state.item,
             price : this.state.price
         }
         this.props.addProduct(newItem, this.props.history);
     }
     onChange = (e) => {
         e.preventDefault();
         this.setState({[e.target.name]: e.target.value})
     }
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
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header">Product</div>
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <h3 className="text-center title-2">Product Create</h3>
                                                </div>
                                                <hr />
                                                <form onSubmit={this.HandleSubmit}>
                                                    <TextFieldForm
                                                        label="title"
                                                        className="control-label mb-1"
                                                        name="item"
                                                        value={this.state.item}
                                                        onChange={this.onChange}
                                                    />
                                                    <TextFieldForm
                                                        label="price"
                                                        className="control-label mb-1"
                                                        name="price"
                                                        value={this.state.price}
                                                        onChange={this.onChange}
                                                    />

                                                    <div>
                                                        <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                                            Create Product
                                    </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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
const mapStateToProps = state => ({
    post: state.post
});
export default connect(mapStateToProps, { addProduct })(withRouter(ProductCreate));