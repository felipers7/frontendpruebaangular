import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/admin.guard';



//rutas con guard para el home en caso de no estar logueado
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
