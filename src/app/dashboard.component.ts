import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  errorMessage: any;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      this.heroService.getHeroes()
                   .subscribe(
                     heroes => this.heroes = heroes.slice(1, 5),
                     error =>  this.errorMessage = <any>error);
  }

  gotoDetail(hero: Hero): void {
     /* not implemented yet */
     console.log(hero);
  }
}