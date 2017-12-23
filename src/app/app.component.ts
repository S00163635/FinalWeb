import { Component } from '@angular/core';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent  {
 
//EMILYS 
  user = null;

  constructor(
      // private auth: AuthService
    ) { }

      
  ngOnInit() {
      // this.auth.getAuthState().subscribe(
      //   (user) => this.user = user);
    }


  
}
