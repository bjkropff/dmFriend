import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

// import { Hero } from './hero';
// import { HeroService } from './hero.service';

@Component({
  selector: 'my-text',
  templateUrl: 'app/text.component.html',
  styleUrls: ['app/text.component.css']
})
export class TextComponent implements OnInit {

  // heroes: Hero[] = [];
  //
  // constructor(
  //   private _router: Router,
  //   private _heroService: HeroService) {
  // }
  //
  // ngOnInit() {
  //   this._heroService.getHeroes()
  //     .then(heroes => this.heroes = heroes.slice(1,5));
  // }
  //
  // gotoDetail(hero: Hero) {
  //   let link = ['HeroDetail', { id: hero.id }];
  //   this._router.navigate(link);
  // }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
