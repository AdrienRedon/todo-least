'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the $firebase service
 * - exposes the model to the template and provides event handlers
 */
todo.controller('TodoCtrl', function($scope, $firebaseArray, Auth, filterFilter) {
    var url = 'https://your-firebase.firebaseio.com/';
    var fireRef = new Firebase(url);

    $scope.logedin = Auth.signedIn();

    $scope.todos = $scope.logedin ? $firebaseArray(fireRef) : [];

    $scope.$watch('todos', function() {
        $scope.remaining = filterFilter($scope.todos, {completed: false}).length;
    }, true);

    $scope.login = function () {
      Auth.login($scope.user).then(function () {
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


