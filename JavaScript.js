var app = angular.module('MainApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.menu = [{
        link: '',
        title: 'Dashboard',
        icon: 'dashboard'
    },{
        link: '',
        title: 'Friends',
        icon: 'group'
    },{
        link: '',
        title: 'Messages',
        icon: 'message'
    }];

    $scope.admin = [{
          link: '',
          title: 'Trash',
          icon: 'delete'
    },{
          link: 'showListBottomSheet($event)',
          title: 'Settings',
          icon: 'settings'
    }];

    $scope.selected = null;
    $scope.selectSidemenu = function (item) {
        console.log(angular.isNumber(item));
        $scope.selected = angular.isNumber(item) ? $scope.menu[item] : item;
        $scope.toggleSidenav('left');
    };


}]);