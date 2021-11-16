import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZComponent } from './modulo/z/z.component';
import { C1Component } from './modulo/c1/c1.component';
import { C2Component } from './modulo/c2/c2.component';
import { C3Component } from './modulo/c3/c3.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
