import React, { Component } from 'react'
import { TextFieldForm } from "../../utils/FormComponent";
import {Link} from "react-router-dom";
import { loginUser } from "../../../redux/actions/AuthActions";
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        email: '',
        passwd: '',
    }


    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email : this.state.email,
            passwd: this.state.passwd
        }
        this.props.loginUser(userData,this.props.history);
    }
  render() {
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
                                                label="email"
                                                className="au-input au-input--full"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.onChange}
                                                placeholder="email"
                                                type="text"
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
                                            />
                                        </div>
                                        <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                    </form>
                                    <div className="register-link">
                                        <p>
                                            Don't you have account?
                <Link to="/register">Sign Up Here</Link>
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
});
//bagian pertama state menjadi props
//bagian kedua deklarasi action yang dibuat di actions creator
export default connect(mapStateToProps, { loginUser })(Login);
