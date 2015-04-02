'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the $firebase service
 * - exposes the model to the template and provides event handlers
 */
<<<<<<< HEAD
todo.controller('TodoCtrl', function(FirebaseService, $scope, $firebaseArray, Auth, filterFilter) {

    var userId;
    var fireRef;
=======
todo.controller('TodoCtrl', function($scope, $firebaseArray, Auth, filterFilter) {
    var url = 'https://your-firebase.firebaseio.com/';
    var fireRef = new Firebase(url);
>>>>>>> bf2417478530de58b7ad30e8384d4757954fb87a

    $scope.logedin = Auth.signedIn();

    $scope.todos = fireRef ? $firebaseArray(fireRef) : [];


    $scope.$watch('todos', function() {
        $scope.remaining = filterFilter($scope.todos, {completed: false}).length;
    }, true);

    $scope.login = function () {
      Auth.login($scope.user).then(function () {
        fireRef = new Firebase(FirebaseService.url + '/users/' + Auth.signedIn().uid + '/todos');
        $scope.todos = $firebaseArray(fireRef);
        $scope.logedin = true;
      });
    };

    $scope.logout = function () {
        $scope.todos = [];
        $scope.logedin = false;
        Auth.logout();
    };


    $scope.addTodo = function(e) {
        // Listen for return key
        if (e.keyCode === 13 && $scope.text) {
          $scope.todos.$add({ text: $scope.text, completed: false });
          $scope.text = "";
        }
    };

    $scope.editTodo = function(todo) {
        todo.editing = false;
    };

    $scope.removeTodo = function(index) {
        $scope.todos.$remove(index);
    };
});
