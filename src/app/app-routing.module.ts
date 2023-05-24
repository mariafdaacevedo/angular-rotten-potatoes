import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'}, //establecer una página de inicio de sesión como la primera página visible para los usuarios.
  { path:'login', component: LoginComponent},
  { path:'home', component: HomeComponent},
  { path: 'movie', component: MovieComponent},
  { path: '**', component: LoginComponent}  // capturar cualquier ruta no definida explícitamente y se utiliza como una ruta comodín o genérica.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
