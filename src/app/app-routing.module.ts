import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },{
    path:'list',
    component: ListPageComponent
  },{
    path:'form',
    component: FormPageComponent
  },{
    path:'**',
    redirectTo:'list'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
