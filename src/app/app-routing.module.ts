import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleCalendarComponent } from './simple-calendar/simple-calendar.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'simplecalendar',
  pathMatch: 'full',
  },
  {
    path: 'simplecalendar',
    component: SimpleCalendarComponent,
    data: [ {title: 'Home'} ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
