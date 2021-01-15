import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LogadoComponent } from './logado/logado.component';

const routes: Routes = [
  {path:"", redirectTo: "login", pathMatch: "full"}, 
  {path: "login", component: LoginComponent},
  {path: "logado", component: LogadoComponent},
  {path: "error", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
