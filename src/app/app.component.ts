import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'datasharing';
  currentBeverage = "coffee";
  beverages = ['milk', 'tea', 'coffee', 'juice'];


  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
    this.clearInput();
  }

  // Clears beverage on refreshing the page
  clearInput() {
    let input = <HTMLInputElement>document.getElementById('beverage-input');
    input.value = '';
  }
}
