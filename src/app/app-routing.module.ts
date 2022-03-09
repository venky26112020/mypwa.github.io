import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NameFormatComponent } from './name-format/name-format.component';
import { QuationsComponent } from './quations/quations.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "quatations",
    pathMatch: "full",
  },
  {
    path: "quatations",
    component: QuationsComponent,
  },
  {
    path: "wishes",
    component: NameFormatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
