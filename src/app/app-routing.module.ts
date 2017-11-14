import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {TodoGuard} from "./core/components/services/todo-guard.service";

const routes: Routes = [
  {
    path: '',
    canActivate: [TodoGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {path: 'home', component: HomeComponent},
      {path: '404', component: HomeComponent},
      {path: '**', redirectTo: '404'}
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: false
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
