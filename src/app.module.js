import * as angular from 'angular';
import appRoutes from './app.routes';
import './app.scss';
import HomeComponent from './home/home.component';
import TestComponent from './test/test.component';
import ListComponent from './list/list.component';
import HomeController from './home/home2.controller';

// External Modules
import '@uirouter/angularjs';
import 'angular-mocks';
import 'bootstrap';
import 'bootstrap-loader';
import 'jquery';

angular.module('RachelTheApp', ['ui.router'])
  .component('home', HomeComponent)
  .component('test', TestComponent)
  .component('list', ListComponent)
  .controller('HomeController', HomeController)
  .config(appRoutes);
//   .config(function($stateProvider) {
//   var helloState = {
//     name: 'hello',
//     url: '/hello',
//     template: '<h3>hello world!</h3>'
//   }
//
//   var aboutState = {
//     name: 'about',
//     url: '/about',
//     template: '<h3>Its the UI-Router hello world app!</h3>'
//   }
//
//   $stateProvider.state(helloState);
//   $stateProvider.state(aboutState);
// });
