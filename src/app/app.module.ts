import {HttpClientModule,HttpClient } from '@angular/common/http';
import {RecipeService} from './recipes.service'
import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//CIARA routing imports - routes, routermodule, locationstrategy and hashlocationstrategy 
import {Routes, RouterModule } from '@angular/router';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
//CIARA firebase import causing an error so commented out 
//import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

//materials
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import{MatCardModule} from '@angular/material'


import { MatButtonModule,MatIconModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component'; 
import { MatMenuModule,} from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';

// CIARA this is the firebase config key that has google and email enabled this is causing an error so I commented it out
//export const firebaseConfig = {
 // apiKey: "AIzaSyBauIc13dmojSN_7hP6xVXNhw2m-bEKMIQ",
 // authDomain: "webauth-e1cd2.firebaseapp.com",
 // databaseURL: "https://webauth-e1cd2.firebaseio.com",
 // projectId: "webauth-e1cd2",
 // storageBucket: "webauth-e1cd2.appspot.com",
//  messagingSenderId: "154487020136"
//};

//CIARA this is the paths for routing (components)
const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'RecipeDescription',component:RecipeDescriptionComponent},
  {path:'Profile',component:ProfileComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    RecipeListComponent,
    NavigationComponent,
    RecipeDescriptionComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpClientModule,
     //CIARA import for routing 
     RouterModule.forRoot(routes),
     // CIARA thi is firebase import although linked to import at top of page and causing major error so commented out
     //AngularFireModule.initializeApp(firebaseConfig),
     
    //mat
    MatInputModule,
    MatListModule,    
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    MatAutocompleteModule
     
  ],
  providers: [
    //CIARA routing providers 
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
