import { Component } from '@angular/core'
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-heroes',
    template: `
            <h2>My Heroes</h2>
            <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
            </ul>   
            
            <hr>
            <my-hero-detail [hero]="selectedHero"></my-hero-detail>
            `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
providers: [HeroService]

})
export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService) {
          
     }
    title = 'Tour of Heroes';
    heroes: Hero[];
    errorMessage:string;
    selectedHero: Hero;
    test: any;
    onSelect(hero: Hero): void {
        console.log(hero);
        this.selectedHero = hero;
    }

    ngOnInit(): void {
      // this.heroService.getHeroes().
      // this.heroService.getHeroes().then(function(heroes){
      // this.heroes = heroes;
      // });
      // console.log("INIT");
      // //console.log(this.heroService.getJson());
      // this.heroService.getJson().then(heroes => console.log(heroes.NSE));
      // console.log(this.test);
      // //this.heroService.getHeroes().then(heroes => console.log(heroes));
      this.heroService.getHeroes()
                   .subscribe(
                     heroes => this.heroes = heroes,
                     error =>  this.errorMessage = <any>error);
      
    }

}
