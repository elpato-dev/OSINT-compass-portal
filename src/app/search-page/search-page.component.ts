import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})


export class SearchPageComponent implements OnInit {
  @Output() startSearch: EventEmitter<{ term: string, category: string }> = new EventEmitter<{ term: string, category: string }>();

  searchQuery = '';
  selectedCategory = '';
  categories =  ['Term', 'E-Mail', 'Domain'];

  ngOnInit() {
    this.selectCategory('');
  }
  selectCategory(category: string): void {
    console.log('Selected Category:', category);
    this.selectedCategory = category;
  }
  onSearchClick() {
    this.startSearch.emit({term: this.searchQuery, category: this.selectedCategory });
  }
}
