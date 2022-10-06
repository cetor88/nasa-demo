import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { HomeComponent } from './components/home/home.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { ServiceParentComponent } from './components/service-parent/service-parent.component';

const routes: Routes = [
  { path: 'input-output', component: InputOutputComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app-service-parent', component: ServiceParentComponent },
  { path: 'app-alumno', component: AlumnoComponent },
  { path: 'app-poke-list', component: PokeListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
