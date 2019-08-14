import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app.component';
import { RouterPageComponent } from './router-page.component'
import { TwoPageComponent } from './components/two-page.component'


const routes: Routes = [
  { path: '', redirectTo: '/two', pathMatch: 'full' },
  { path: 'one', component: AppComponent },
  { path: 'two', component: TwoPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}