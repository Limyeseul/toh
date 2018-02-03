import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesComponent} from './heroes/heroes.component';
import {RouterModule, Routes} from '@angular/router';

// path가 heroes로 들어오면 HeroesComponent컴포넌트를 Route하라(부모인 app.component.html의 router-outlet로..
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
