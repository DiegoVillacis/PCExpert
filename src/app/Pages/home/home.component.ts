import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'PaginaWeb';
  searchTerm$ = new Subject<string>();
  constructor() { }
  private listDeliciousDishes = [
    'Ceviche',
    'Arepa',
    'Empanadas',
    'Asado',
    'Pizzas',
    'Hamburguesas',
    'Pollo a la Brasa',
    'Pasta 4 Quesos',
    'Lomo Saltado',
    'Pastel',
    'Arroz Chaufa',
  ];
 
  listFiltered  : string[] = [];
  ngOnInit(): void {
    
    this.listFiltered = this.listDeliciousDishes;
    this.filterList();
  }

  filterList(): void {
    this.searchTerm$.subscribe(term => {
      this.listFiltered = this.listDeliciousDishes
        .filter(item => item.toLowerCase().indexOf(term.toLowerCase()) >= 0);
    });
  }
}



 
