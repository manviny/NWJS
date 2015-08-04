'use strict';

try {

    var gui = require('nw.gui');
    var  currentWindow = gui.Window.get();
    currentWindow.isFullscreen = true;

    // alert(gui.App.dataPath);                  // path to save files

    currentWindow.on('minimize', function(){ alert('Minimizing the window'); })

}
catch(err) { }

/**
 * @ngdoc overview
 * @name memoriadeunpuebloApp
 * @description
 * # memoriadeunpuebloApp
 *
 * Main module of the application.
 */
angular
  .module('memoriadeunpuebloApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
