angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/menu.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reminder 1', id: 1 },
    { title: 'Reminder 2', id: 2 },
    { title: 'Reminder 3', id: 3 },
    { title: 'Reminder 4', id: 4 },
    { title: 'Reminder 5', id: 5 },
    { title: 'Reminder 6', id: 6 },
    { title: 'Reminder 7', id: 7 },
    { title: 'Reminder 8', id: 8 },
    { title: 'Reminder 9', id: 9 },
    { title: 'Reminder 10', id: 10 }
  ];
})


.controller('ReferenceCtrl', function($scope) {
  $scope.reference = [
    { title: 'Ionic Framework', id: 1,src:'/img/ionic.png' },
    { title: 'Angular JS', id: 2,src:'/img/angular.jpg' },
    { title: 'HTML 5', id: 3,src:'/img/html.png' },
    { title: 'CSS 3', id: 4,src:'/img/css.png' },
    { title: 'Node JS', id: 5,src:'/img/node.png' },
    { title: 'Sublime Text 3', id: 6,src:'/img/sublime.png' }  
  ];



});
