'use strict';

/**
 * Factory to get the databases from Firebase 
 * @return Firebase     Users and Todos 
 */
todo.factory('FirebaseService', function() {

    return {
        url : 'https://popping-heat-7040.firebaseio.com/'
    };

});