import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Users from "../Users/Users";
import Lists from '../Lists/Lists';
import authService from "../../services/authService";
import AddListPage from '../AddListPage/AddListPage';
import * as listAPI from '../../services/lists-api'
import "./App.css";

class App extends Component {
  state = {
    lists: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleAddList = async newListData => {
    const newList = await listAPI.create(newListData);
    this.setState(state => ({
      lists: [...state.lists, newList]
    }), () => this.props.history.push('/'));
  }

  async componentDidMount() {
    const lists = await listAPI.getAll();
    this.setState({lists});
}

  render() {
    const { user } = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>A Few of Our Favorite Things</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route
          exact
          path="/lists"
          render={() => 
            (user ? <Lists 
              lists={this.state.lists}
              user={this.state.user}
            /> : <Redirect to="/login" />)}
        />
        <Route exact path='/add' render={() => 
          <AddListPage
            handleAddList = {this.handleAddList}
            />
          } />
      </>
    );
  }
}
export default App;
