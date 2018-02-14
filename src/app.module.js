import * as angular from 'angular';
import appRoutes from './app.routes';
import './app.scss';
import HomeComponent from './home/home.component';

// External Modules
import '@uirouter/angularjs';
import 'angular-mocks';
import 'bootstrap';
import 'bootstrap-loader';
import 'jquery';

angular.module('RachelTheApp', ['ui.router'])
  .component('home', HomeComponent)
  .config(appRoutes);
