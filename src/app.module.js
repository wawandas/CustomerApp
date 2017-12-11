
import angular  from 'angular';
import ngRouter from 'angular-route';
import Routing  from './app.routes';

import {OverviewComponent} from './components/overview/overview.component';
import {AddCustomerComponent}  from './components/overview/add-customer.component'
import {DetailsComponent}  from './components/details/details.component'
import {NavigationComponent}  from './components/navigation/navigation.component'
import {CustomerService} from './services/customer.service';


import 'jquery';
import 'bootstrap-loader';
import './style.css';

angular.module('app', ['ngRoute'])
	.component('overviewComponent', OverviewComponent)
	.component('addCustomerComponent', AddCustomerComponent)
	.component('navigationComponent', NavigationComponent)
	.component('detailsComponent', DetailsComponent)
	.service('CustomerService', CustomerService)
	.config(Routing);