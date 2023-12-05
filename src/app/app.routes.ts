import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


@NgModule({
    imports: [CommonModule]
  })
  export class MainViewModule { }