import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const appRoutes: Routes = [
    { path : '',redirectTo: '/login', pathMatch: 'full'},
    { path : 'register',component: RegisterPageComponent},
    { path : 'login',component: LoginPageComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule]
})
export class AppRoutingModule {

}