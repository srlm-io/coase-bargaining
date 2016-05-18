var app = angular.module('coaseApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('start', {
            url: '/',
            templateUrl: 'partials/start.html'
        })

    .state('collect-responses', {
            templateUrl: 'partials/collect-responses.html',
            controller: function($scope) {
                //   $scope.users.push({
                //     name: 'AAA',
                //     wtp: 5
                //   });
                //   $scope.users.push({
                //     name: 'BBB',
                //     wta: 4
                //   });
                //   $scope.users.push({
                //     name: 'CCC',
                //     wtp: 6,
                //     wta: 3
                //   });
                //   $scope.users.push({
                //     name: 'DDD',
                //     wtp: 2,
                //     wta: 6
                //   });
                //   $scope.users.push({
                //     name: 'EEE',
                //     wta: 8
                //   });
                //   $scope.users.push({
                //     name: 'FFF',
                //     wta: 10
                //   });
                //   $scope.users.push({
                //     name: 'GGG',
                //     wta: 12
                //   });
                //   $scope.users.push({
                //     name: 'HHH',
                //     wta: 4
                //   });
                //   $scope.users.push({
                //     name: 'III',
                //     wta: 2
                //   });
            }
        })
        .state('add-user', {
            templateUrl: 'partials/add-user/index.html',
            controller: function($scope) {
                $scope.currentUser = {
                    name: ''
                };
            }
        })
        .state('add-user.name', {
            templateUrl: 'partials/add-user/name.html'
        })
        .state('add-user.check-if-buyer', {
            templateUrl: 'partials/add-user/check-if-buyer.html'
        })
        .state('add-user.set-willingness-to-pay', {
            templateUrl: 'partials/add-user/set-willingness-to-pay.html'
        })
        .state('add-user.check-if-seller', {
            templateUrl: 'partials/add-user/check-if-seller.html'
        })
        .state('add-user.set-willingness-to-accept', {
            templateUrl: 'partials/add-user/set-willingness-to-accept.html'
        })
        .state('add-user.confirm', {
            templateUrl: 'partials/add-user/confirm.html'
        })
        .state('show-results', {
            templateUrl: 'partials/show-results.html',
            controller: function($scope) {
                $scope.algorithm = 'split';
                $scope.revealPreverences = true;
            }
        });

});
app.run(function($rootScope) {
    // We have to make question an object so that the reference doesn't get overwritten (aka, pointers).
    $rootScope.question = { text: '' };
    $rootScope.users = [];
});
app.run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
});
