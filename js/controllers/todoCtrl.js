'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the $firebase service
 * - exposes the model to the template and provides event handlers
 */
todo.controller('TodoCtrl', function(FirebaseService, $scope, $firebaseArray, Auth, filterFilter) {

    $scope.logedin = Auth.signedIn();
    $scope.todos = $scope.logedin ? $firebaseArray(new Firebase(FirebaseService.url + '/users/' + Auth.signedIn().uid + '/todos')) : [];


    $scope.$watch('todos', function() {
        $scope.remaining = filterFilter($scope.todos, {completed: false}).length;
    }, true);

    $scope.signUp = function() {
        Auth.signUp($scope.user).then(function() {
            $scope.login($scope.user);
        });
    };

    $scope.login = function() {
      Auth.login($scope.user).then(function() {
        $scope.todos = $firebaseArray(new Firebase(FirebaseService.url + '/users/' + Auth.signedIn().uid + '/todos'));
        $scope.logedin = true;
      });
    };

    $scope.logout = function() {
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
