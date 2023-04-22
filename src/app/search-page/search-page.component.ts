import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppComponent} from "../app.component";
import {BingAutosuggestService} from "../../services/bing-autosuggest/bing-autosuggest.service";
import {debounceTime, distinctUntilChanged, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})


export class SearchPageComponent implements OnInit {
  @Output() startSearch: EventEmitter<{ term: string, endpoint: string }> = new EventEmitter<{ term: string, endpoint: string }>();

  searchQuery = '';
  suggestions: any;

  searchTerms = new Subject<string>();

  selectedCategory : any;
  categories: string[] = [
    "Term",
    "E-Mail",
    "Domain"
  ];

  constructor(private bingAutosuggestService: BingAutosuggestService) {
    this.searchTerms
      .pipe(
        // Wait for 3 seconds after each keystroke before considering the term
        debounceTime(3000),

        // Ignore new term if it's the same as the previous term
        distinctUntilChanged(),

        // Switch to new search observable each time the term changes
        switchMap((term: string) => this.bingAutosuggestService.getSuggestions(term))
      )
      .subscribe((suggestions) => {
        this.suggestions = suggestions;
      });
  }
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
  async onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const query = target.value;
    this.searchTerms.next(query);
  }
}
