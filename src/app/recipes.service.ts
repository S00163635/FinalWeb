import { NextObserver } from 'rxjs/Observer';
import { Response, ResponseContentType } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Http} from "@angular/http";
//import {IAPIRecipes} from "./APIrecipes";
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()

//Fidels Service
export class RecipeService {



 private _RecipesUrl =   'http://www.omdbapi.com/?i=tt3896198&apikey=78edb52d';
  
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

// getMovies(ids:string[]):Observable<IRecipes[]>
// {
//   const movieGet:Observable<IRecipes>[] = ids.map(id =>this.getMovieById(id));
//   return Observable.forkJoin(movieGet);
// }

//  getMovieById(id: string): Observable<IRecipes> {
//     return this._http.get<IRecipes>(`${this._http}&&i=${id}`)
//       .do(data => console.log('Movie: ' + JSON.stringify(data)))
//       .catch(this.handleError)
//   }

//   private handleError(err : HttpErrorResponse){
//     return Observable.throw(err.message);
//   }

}