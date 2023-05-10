import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { RegistrationComponent } from './registration/registration.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'movies', canActivate:[AuthGuard],component:MoviesComponent},
  {path:'people', canActivate:[AuthGuard],component:PeopleComponent},
  {path:'details/:mt/:id', canActivate:[AuthGuard],component:DetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'network', canActivate:[AuthGuard],component:NetworkComponent},
  {path:'tvshows', canActivate:[AuthGuard],component:TvshowsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
