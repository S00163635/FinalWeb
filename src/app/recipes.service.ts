import { NextObserver } from 'rxjs/Observer';
import { Response, ResponseContentType } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Http} from "@angular/http";
//import {IAPIRecipes} from "./APIrecipes";

@Injectable()

//Fidels Service
export class RecipeService {
  
 private _RecipesUrl =   'https://www.googleapis.com/customsearch/v1?key=AIzaSyApsE_UdsJD9wYiDnqNejoHKufuMmFp_c8&cx=005639442794109511634:m14ey8csloy&q=food';
  
 constructor(private _http: HttpClient) { }

 getRecipes():Observable<IRecipes>{
   console.log("In RecSer: ");
   return this._http.get<IRecipes>(this._RecipesUrl)
   .do(data => console.log('All:' + JSON.stringify(data)))
   .catch(this.handleError);
 }

 private handleError(err:HttpErrorResponse)
 {
   console.log("Recipe Search" + err.message);
   return Observable.throw(err.message);
    
 } 

}

