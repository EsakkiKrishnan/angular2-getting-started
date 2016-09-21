import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';

@Injectable()
export class HeroService{
    // getHeroes(): Promise<Hero[]>{
    //     return Promise.resolve(HEROES);
    // }
  //   private headers = new Headers({'Content-Type': 'application/json'});
    
  //   private heroesUrl = 'http://appfeeds.moneycontrol.com/json/stocks/overview&sc_id=MPS&ex=N&t_device=iphone&t_app=MC&t_version=12';
  //   constructor(private http: Http) { }

  // getHeroes(): Promise<Hero[]> {
  //   // return this.http.get(this.heroesUrl, {headers: this.headers})
  //   //            .toPromise()
  //   //            .then(response => response.json().data as Hero[])
  //   //            .catch(this.handleError);
  //   heroPromise: Promise<Hero[]> = new Promise();
  //   heroPromise.resolve();
  //   return 

  //   return Promise.resolve(HEROES);
  // }
constructor (private http: Http) {}
private heroesUrl = 'http://www.mocky.io/v2/57e0ecb1100000ae17f3a573';  // URL to web API
  getHeroes (): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(res);
    //console.log(body.data);
    return body || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}