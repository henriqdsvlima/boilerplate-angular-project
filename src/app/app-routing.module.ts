// This module handles the routing for the application.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

// Define the routes for the application.
const routes: Routes = [
  {
    // The default route. Redirects to the HomeComponent.
    path: '',
    component: HomeComponent,
    loadChildren: () => import('../app/app.module').then((m) => m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
