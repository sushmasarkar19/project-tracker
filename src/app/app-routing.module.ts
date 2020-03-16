import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';


const routes: Routes = [
  {
    path:'login',
   component:LoginComponentComponent
  },
    {
      path:'',redirectTo:'/login',pathMatch:'full'
      
    },
    {
      path:'**',redirectTo:'/login',pathMatch:'full'
      
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
