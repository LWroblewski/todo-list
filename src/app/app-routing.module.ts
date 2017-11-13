import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path: 'home', component: HomeComponent},
  {path: '404', component: HomeComponent},
  {path: '**', redirectTo: '404'}
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
