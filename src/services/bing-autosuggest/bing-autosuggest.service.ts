import { Injectable } from '@angular/core';
import axios from 'axios';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class BingAutosuggestService {
  private apiUrl = 'https://api.bing.microsoft.com/v7.0/suggestions';

  constructor() {}

  async getSuggestions(query: string) {
    const currentTime = new Date();
    console.info(`[${currentTime.toISOString()}] "Tom just payed for autocomplete"`);
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          q: query,
        },
        headers: {
          'Ocp-Apim-Subscription-Key': environment.bing_secret,
        },
      });

      return response.data.suggestionGroups[0].searchSuggestions;
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      return [];
    }
  }
}
