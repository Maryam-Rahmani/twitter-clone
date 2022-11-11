import DefaultLayout from '../layouts/Default';
import StartPage from '../pages/start';
import SignUpPage from '../pages/sign-up';
//import Dashboard from 'pages/dashboard'
import { Component } from 'react';
//import LoginPage from 'pages/login'
export interface RouteComponent {
  path: string;
  component: any;
}



export interface RouteInfo {
  path: string;
  name: string;
  component?: any;
  pathTo?: any;
  redirect?: boolean;
}


const indexRoutes: RouteComponent[] = [{ path: '/', component: DefaultLayout }]

const AppRoutes: RouteInfo[] = [
  //{
   // path: '/dashboard',
   // name: 'داشبورد',
    //icon: 'fa fa-tachometer-alt',
    //component: Dashboard,
   // showInNav: true,
  //},
  {
    path: '/sign-up',
    name: 'Log in',
   // icon: 'fa fa-list',
    component: SignUpPage,
    //showInNav: true,
  },

 // {
    //path: '/login',
    //name: 'ورود',
    //icon: 'fa fa-plus',
    //component: LoginPage,
   // showInNav: false,
  //},
 {
    path: '/start',
    name: 'start',
    //icon: 'fa fa-phone',
    component: StartPage,
  },
  { path: '/', pathTo: '/start', name: 'Start', redirect: true },
]

export default AppRoutes

export { indexRoutes }
