import {Component,OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent {

myControl:FormControl = new FormControl();
val: string;
filteredOptions: Observable<string[]>;


  option = [
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
    recipe.Title.toLocaleLowerCase().indexOf(filterby) !== -1);
  }


//  ngOnInit() {
//     this.filteredOptions = this.myControl.valueChanges
//       .pipe(
//         startWith(''),
//         map(val => this.filter(val))
//       );
      
//   }

//    filter(val:any): string[] {
//     return this.option.filter(option =>
//       option.toLowerCase().indexOf(val.toLowerCase()) === 0);
//   }
}
