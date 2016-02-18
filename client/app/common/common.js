import angular from 'angular';
import Navbar from './navbar/navbar';
import Dashboard from './dashboard/dashboard';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Dashboard.name,
  User.name
]);

export default commonModule;
