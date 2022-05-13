(function(){

    'use strict';
  
  
  
    angular.module('appGit').config(config);
  
  
  
    config.$inject =['$routeProvider'];
  
  
  
    function config($routeProvider) {
  
      $routeProvider
  
      .when('/',{
  
        template: '<git-component></git-component>'
  
      })
      .when('/user/:name',{
  
        template: '<git-user-component></git-user-component>'
  
      })
      .otherwise({
  
        redirectTo: '/'
  
      });
  
    }
  
  })();