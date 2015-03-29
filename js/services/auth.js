'use strict';

todo.factory('Auth', function ($firebaseAuth, $rootScope) {
  var ref = new Firebase('https://popping-heat-7040.firebaseio.com/');
  var auth = $firebaseAuth(ref);

  var Auth = {
    user: {},
    login: function(user) {
      return auth.$authWithPassword(user);
    },
    logout: function() {
      auth.$unauth();
      return true;
    },
    signedIn: function() {
      return auth.$getAuth();
    }
  };

  return Auth;
});