import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})


export class SearchPageComponent implements OnInit {
  @Output() startSearch: EventEmitter<{ term: string, endpoint: string }> = new EventEmitter<{ term: string, endpoint: string }>();

  searchQuery = '';
  selectedCategory : any;
  categories: string[] = [
    "Term",
    "E-Mail",
    "Domain"
  ];

  ngOnInit() {
    const firstCategory = Object.keys(this.categories)[0];
    this.selectCategory(firstCategory);
  }
  selectCategory(category: any): void {
    this.selectedCategory = category;
    console.log('Selected Category:', this.selectedCategory);
  }
  onSearchClick() {
    console.warn(this.selectedCategory);
    let endpoint = "";
      switch (this.selectedCategory) {
        case "Term" : endpoint = "term"; break;
        case "E-Mail" : endpoint = "email"; break;
        case "Domain" : endpoint = "domain"; break;
      }
    this.startSearch.emit({term: this.searchQuery, endpoint:  endpoint});
  }
}
