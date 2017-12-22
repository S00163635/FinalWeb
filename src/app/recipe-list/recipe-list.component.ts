import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipes.service'
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
  //CIARA filter search
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredrecipes = this.listFilter ? this.performfilter(this.listFilter) : this.recipes;
  }


  //CIARA filter search 
  filteredrecipes: IRecipes[];
  recipes: IRecipes[];


  performfilter(filterBy:string):IRecipes[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.recipes.filter((recipes:IRecipes)=> recipes.movieName.toLocaleLowerCase().indexOf(filterBy) != 1);
  }
  
    constructor(private _RecipeService:RecipeService){}
    //CIARA this should work but conflict with constructor as recipe service code isnt mine
    //this.filteredrecipes = this.recipes;
  
    ngOnInit(){
      this._RecipeService.getRecipes().subscribe(recipes =>{
        
     // this.recipes = recipes;
    },
    error => this.errorMessage = <any>error);
}
}
