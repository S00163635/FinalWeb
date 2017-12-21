import { Component, OnInit } from '@angular/core';
import {RecipeService} from 'C:/Users/Swagasorus Rex/Desktop/webFinal/FinalWeb/src/app/recipes.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  errorMessage: string;
  recipes: IRecipes[];
  
    constructor(private _RecipeService:RecipeService){}
  
    ngOnInit(){
      this._RecipeService.getRecipes().subscribe(recipes =>{
        
     // this.recipes = recipes;
    },
    error => this.errorMessage = <any>error);
}
}
