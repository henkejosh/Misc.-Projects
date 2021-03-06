"use strict";

const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher.js');
const SessionConstants = require('../constants/session_constants.js');
const hashHistory = require('react-router').hashHistory;

let _currentUser = {};

const SessionStore = new Store(Dispatcher);

const _login = function(currentUser) {
  _currentUser = currentUser;
};

const _logout = function() {
  _currentUser = {};
  hashHistory.push("/");
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

SessionStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

module.exports = SessionStore;
