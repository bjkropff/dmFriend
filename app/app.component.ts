import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

/* Below will
import  HeroService  from './hero.service';
import DashboardComponent from './dashboard.component';
import HeroesComponent from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { TextComponent } from './text.component';
*/
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { TextComponent } from './text.component';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Roller</a>
      <a [routerLink]="['Heroes']">Name Gen</a>
      <a [routerLink]="['Heroes']">List of Heros</a>
      <a [routerLink]="['Text']">Txt</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/text',
    name: 'Text',
    component: TextComponent

  }

])
export class AppComponent {
  title = 'DM Buddy ';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
