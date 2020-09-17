import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

class Login extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <main className="Login">
        <h3>Log In!</h3>
        <div className='login-form'>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className='form-item'>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={this.handleChange}
              />  
            </div>
            <div className='form-item'>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={pw}
                name="pw"
                onChange={this.handleChange}
              />
            </div>
            <button id="login-btn" className="btn green">Log In</button>&nbsp;&nbsp;&nbsp;
            <Link className="btn red" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </main>
    );
  }
}

export default Login;