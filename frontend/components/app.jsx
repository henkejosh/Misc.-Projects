const React = require('react');
const SessionApiUtil = require('../util/session_api_util.js');
const SessionActions = require('../actions/session_actions.js');
const SessionStore = require('../stores/session_store.js');
const Modal = require('react-modal');
const Navbar = require('./navbar.jsx');
const Router = require('react-router').Router;
const hashHistory = require('react-router').hashHistory;

const App = React.createClass({
  getInitialState: function() {
   return { signUpIsOpen: false, loginIsOpen: false };
 },

 openSignUpForm: function() {
  hashHistory.push("/signup");
 },

 closeSignUpForm: function() {
   this.setState({signUpIsOpen: false});
 },

 openLoginForm: function() {
   hashHistory.push("/login");
 },

 closeLoginForm: function() {
   this.setState({loginIsOpen: false});
 },

  guestLogin: function() {
    SessionActions.login({email: "guest", password: "password"});
  },

  LogOut: function(e) {
    e.preventDefault();
    SessionActions.logout();
  },

 componentWillMount() {
    Modal.setAppElement(document.getElementById("root"));
 },

  render: function() {
    let component = <div><button onClick={this.LogOut}>Log Out</button></div>;
    if (SessionStore.currentUser().id === undefined) {
      component = (
        <div>
          <button onClick={this.guestLogin}>Guest Login</button>
          <button onClick={this.openSignUpForm}>Sign Up</button>
          <button onClick={this.openLoginForm}>Log In</button>
        </div>
      );
    }
    return (
      <div>
      <Navbar/>
      {this.props.children}
      <br/>
        {component}
      </div>
    );
  }
});

module.exports = App;
