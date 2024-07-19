import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: "courses",
    component: CoursesComponent
  },
  {
  path: "user",
  component: UserComponent
  },
  {
    path: "index",
    component: IndexComponent
  },
  {
    path: "report",
    component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
