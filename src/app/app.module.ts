import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from "@angular/router"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { RollingComponent } from './rolling/rolling.component';
import { BeatlesComponent } from './beatles/beatles.component';
import { QueenComponent } from './queen/queen.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'foo',  component: FooComponent },
  { path: 'bar',  component: BarComponent },
  { path: 'the-rolling-stones',  component: RollingComponent },
  { path: 'the-beatles',  component: BeatlesComponent },
  { path: 'queen',  component: QueenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooComponent,
    BarComponent,
    RollingComponent,
    BeatlesComponent,
    QueenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
