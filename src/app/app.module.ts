import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {TodoState} from './core/components/stores/todo.store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterializeModule} from 'angular2-materialize';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {MobxAngularModule} from 'mobx-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MobxAngularModule
  ],
  providers: [
    TodoState
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
