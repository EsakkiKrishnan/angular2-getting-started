import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{
    // getHeroes(): Promise<Hero[]>{
    //     return Promise.resolve(HEROES);
    // }
    private headers = new Headers({'Content-Type': 'application/json'});
    
    private heroesUrl = 'http://appfeeds.moneycontrol.com/json/stocks/overview&sc_id=MPS&ex=N&t_device=iphone&t_app=MC&t_version=12';
     constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.heroesUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  getJson(){
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
      return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
}