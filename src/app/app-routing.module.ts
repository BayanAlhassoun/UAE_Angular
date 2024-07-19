import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "admin",
    loadChildren:  ()=> import('./admin/admin.module').then( (m) => m.AdminModule)
  },
  {
    path: "",
    loadChildren: ()=>import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "trainer",
    loadChildren: ()=> import('./trainer/trainer.module').then(m=>m.TrainerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
