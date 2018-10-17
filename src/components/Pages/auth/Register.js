import React, { Component } from 'react'
import { registerUser } from "../../../redux/actions/AuthActions";
import { TextFieldForm } from "../../utils/FormComponent";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

 class Register extends Component {
     state = {
         nama : '',
         email : '',
         passwd : '',
         errors : {}
     }

     componentDidMount(){
         if(this.props.auth.isAuthenticated){
             this.props.history.push('/dashboard')
         }
     }
     onChange = (e) => {
         this.setState({[e.target.name] : e.target.value})
     }
     onSubmit = (e) => {
         e.preventDefault();
         const newUser = {
             nama : this.state.nama,
             email : this.state.email,
             passwd : this.state.passwd
         }
         this.props.registerUser(newUser,this.props.history);
     }
     

  render() {
      const {errors} = this.state
    return (
        <div>
            <div className="page-wrapper">
                <div className="page-content--bge5">
                    <div className="container">
                        <div className="login-wrap">
                            <div className="login-content">
                                <div className="login-form">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <TextFieldForm
                                                label="name"
                                                className="au-input au-input--full"
                                                name="nama"
                                                value={this.state.name}
                                                onChange={this.onChange}
                                                placeholder="name"
                                                type="text"
                                                error={errors.name}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextFieldForm
                                                label="email"
                                                className="au-input au-input--full"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                placeholder="email"
                                                type="text"
                                                error={errors.email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextFieldForm
                                            label="password"
                                                className="au-input au-input--full"
                                                name="passwd"
                                                value={this.state.passwd}
                                                onChange={this.onChange}
                                                placeholder="password"
                                                type="password"
                                                error={errors.passwd}
                                            />
                                        </div>
                                        <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">Register</button>
                                    </form>
                                    <div className="register-link">
                                        <p>
                                            have account?
                <Link to="/">Log In Here</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

//membuat state menjadi props
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
//bagian pertama state menjadi props
//bagian kedua deklarasi action yang dibuat di actions creator
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
