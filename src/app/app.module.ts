import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { AppComponent } from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {TodoService} from './core/components/services/todo.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterializeModule} from 'angular2-materialize';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {reducers} from './redux/redux.config';
import {TodoGuard} from './core/components/services/todo-guard.service';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {TodosEffects} from './todos/todos.effects';

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
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([TodosEffects]),
  ],
  providers: [
    TodoService,
    TodoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
