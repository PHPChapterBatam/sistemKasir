import React, { Component } from 'react'
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import Dashboard from "../../layouts/Dashboard";
import _ from "lodash";
import { TextFieldForm } from "../../utils/FormComponent";
import { editProduct, getProduct } from "../../../redux/actions/ProductActions";

class ProductEdit extends Component {
    state = {
        item: '',
        price: ''
    }
    componentDidMount() {
        //UNTUK MENANGKAP POST SPESIFIK DENGAN ID 
        this.props.getProduct(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.product.product) {
            const product = nextProps.product.product;
            product.item = !_.isEmpty(product.item) ? product.item : '';
            product.price = !_.isEmpty(product.price) ? product.price : '';
            this.setState({
                name: product.item,
                price : product.price
            })
        }
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        const {id} = this.props.match.params
        const newItem = {
            item: this.state.item,
            price: this.state.price
        }
        this.props.addProduct(id,newItem, this.props.history);
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
                                                    <h3 className="text-center title-2">Product Edit</h3>
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
                                                            Edit Product
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
    product: state.product
});
export default connect(mapStateToProps,{editProduct,getProduct})(withRouter(ProductEdit))