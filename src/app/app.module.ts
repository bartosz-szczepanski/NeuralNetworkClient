import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';


import { AboutIndexComponent } from './about/about-index/about-index.component';
import { AboutProjectComponent } from './about/about-project/about-project.component';
import { AboutAuthorsComponent } from './about/about-authors/about-authors.component';
import { AboutAlgorithmsComponent } from './about/about-algorithms/about-algorithms.component';

import { AuthSigninComponent } from './auth/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthRecoverComponent } from './auth/auth-recover/auth-recover.component';

import { AccountDashboardComponent } from './account/account-dashboard/account-dashboard.component';
import { AccountConfigComponent } from './account/account-config/account-config.component';
import { AccountPreferencesComponent } from './account/account-preferences/account-preferences.component';
import { AccountSettingsComponent } from './account/account-settings/account-settings.component';

import { RouletteIndexComponent } from './account/roulette/roulette-index/roulette-index.component';
import { RouletteStorageComponent } from './account/roulette/roulette-storage/roulette-storage.component';
import { RouletteComputeComponent } from './account/roulette/roulette-compute/roulette-compute.component';
import { RouletteResultComponent } from './account/roulette/roulette-result/roulette-result.component';

import { StockmarketIndexComponent } from './account/stockmarket/stockmarket-index/stockmarket-index.component';
import { StockmarketStorageComponent } from './account/stockmarket/stockmarket-storage/stockmarket-storage.component';
import { StockmarketComputeComponent } from './account/stockmarket/stockmarket-compute/stockmarket-compute.component';
import { StockmarketResultComponent } from './account/stockmarket/stockmarket-result/stockmarket-result.component';
import { AppMenuComponent } from './core/app-menu/app-menu.component';

const rouletteSubtitle : String = " | Roulette Prediction";
const stockmarketSubtitle : String = "";
const routes: Route[] = [
  { path: '', redirectTo: 'about/index', pathMatch: 'full' },
  //about
  { path: 'about/index', component: AboutIndexComponent, data: { title: 'Home page' } },
  { path: 'about/project', component: AboutProjectComponent, data: { title: 'More info about the project' } },
  { path: 'about/authors', component: AboutAuthorsComponent, data: { title: 'Meet the authors!' } },
  { path: 'about/algorithms', component: AboutAlgorithmsComponent, data: { title: 'How this algorithm works?' } },
  //auth
  { path: 'auth/signin', component: AuthSigninComponent, data: { title: 'Sign in to your account' } },
  { path: 'auth/signup', component: AuthSignupComponent, data: { title: 'Create new account' } },
  { path: 'auth/recover', component: AuthRecoverComponent, data: { title: 'Request for new password' } },
  { path: 'auth/signout', component: AuthRecoverComponent, data: { title: 'You\'ve just logged out.' } },
  //account
  { path: 'account/dashboard', component: AccountDashboardComponent, data: { title: 'Dashboard' } },
  { path: 'account/config', component: AccountConfigComponent, data: { title: 'System configuration' } },
  { path: 'account/preferences', component: AccountPreferencesComponent, data: { title: 'User preferences' } },
  { path: 'account/settings', component: AccountSettingsComponent, data: { title: 'User Settings' } },
  //account-roulette
  { path: 'account/roulette/about', component: RouletteIndexComponent, data: { title: 'About roulette predictioning' + rouletteSubtitle } },
  { path: 'account/roulette/storage', component: RouletteStorageComponent, data: { title: 'Prepare data set' + rouletteSubtitle } },
  { path: 'account/roulette/compute', component: RouletteComputeComponent, data: { title: 'Run neural network algorithm' + rouletteSubtitle } },
  { path: 'account/roulette/result', component: RouletteResultComponent, data: { title: 'Get the results' + rouletteSubtitle } },
  //account-stockmarket
  { path: 'account/stockmarket/about', component: StockmarketIndexComponent, data: { title: 'About stock market predictioning' + stockmarketSubtitle } },
  { path: 'account/stockmarket/storage', component: StockmarketStorageComponent, data: { title: 'Prepare data set' + stockmarketSubtitle } },
  { path: 'account/stockmarket/compute', component: StockmarketComputeComponent, data: { title: 'Run neural network algorithm' + stockmarketSubtitle } },
  { path: 'account/stockmarket/result', component: StockmarketResultComponent, data: { title: 'Get the results' + stockmarketSubtitle } },
  { path: '**', redirectTo: 'about/index' }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutIndexComponent,
    AboutProjectComponent,
    AboutAuthorsComponent,
    AboutAlgorithmsComponent,
    AuthSigninComponent,
    AuthSignupComponent,
    AuthRecoverComponent,
    AccountDashboardComponent,
    AccountConfigComponent,
    AccountPreferencesComponent,
    AccountSettingsComponent,
    RouletteIndexComponent,
    RouletteStorageComponent,
    RouletteComputeComponent,
    RouletteResultComponent,
    StockmarketIndexComponent,
    StockmarketStorageComponent,
    StockmarketComputeComponent,
    StockmarketResultComponent,
    AppMenuComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
