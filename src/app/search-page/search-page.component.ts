import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchQuery = '';
  categories =  ['Term', 'E-Mail', 'Domain'];
  selectedCategory = '';

  ngOnInit() {
    this.selectCategory('');
  }
  selectCategory(category: string): void {
    console.log('Selected Category:', category);
    this.selectedCategory = category;
  }
}
