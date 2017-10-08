import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NotAuthorisedComponent } from './shared/component/not-authorised/not-authorised.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'notathourised', component: NotAuthorisedComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'signup', component: SignUpComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
