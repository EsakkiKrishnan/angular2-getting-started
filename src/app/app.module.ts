import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService }         from './hero.service';
import { routing } from './app.routing';
import { HttpModule }    from '@angular/http';

@NgModule({
	imports: [BrowserModule, FormsModule, routing, HttpModule],
	declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
	providers: [
    HeroService
   ],
	bootstrap : [AppComponent]	
})

export class AppModule {}