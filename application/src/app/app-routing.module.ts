import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordHandlerComponent } from './record-handler/record-handler.component'


const routes: Routes = [
  {path: '', component: RecordHandlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
