import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  options = [
    'Indian',
    'American',
    'Chinese',
    'Greek',
  ];

  filteredRecipe:IRecipes[];
  recipes:IRecipes[];
  _listFilter:string;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredRecipe = this.listFilter ? this.performFilter(this.listFilter) : this.recipes
  }


  constructor() { }

  performFilter(filterby:string):IRecipes[]{
    filterby = filterby.toLocaleLowerCase();
    return this.recipes.filter((recipe:IRecipes) =>
    recipe.recipeName.toLocaleLowerCase().indexOf(filterby) !== -1);
  }


  ngOnInit() {
  }

}
