import {HttpClientModule,HttpClient } from '@angular/common/http';
import {RecipeService} from './recipes.service'
import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//CIARA routing imports - routermodule, locationstrategy and hashlocationstrategy 
import {Routes, RouterModule } from '@angular/router';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';

//materials
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import{MatCardModule} from '@angular/material'


import { MatButtonModule,MatIconModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component'; 
import { MatMenuModule,} from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';

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
    HttpModule
     
  ],
  providers: [
    //CIARA routing providers 
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
