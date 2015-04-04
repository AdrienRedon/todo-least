'use strict';

/**
 * Factory to manage authentication
 */
todo.factory('Auth', function(FirebaseService, $firebaseAuth, $rootScope) {

    var auth = $firebaseAuth(new Firebase(FirebaseService.url));

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
        },
        signUp: function(user) {
            return auth.$createUser(user);
        }
    };

    return Auth;

});
