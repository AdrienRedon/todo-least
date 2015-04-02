'use strict';

<<<<<<< HEAD
todo.factory('Auth', function(FirebaseService, $firebaseAuth, $rootScope) {
  var ref = new Firebase(FirebaseService.url);
=======
todo.factory('Auth', function ($firebaseAuth, $rootScope) {
  var ref = new Firebase('https://your-firebase.firebaseio.com/');
>>>>>>> bf2417478530de58b7ad30e8384d4757954fb87a
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
