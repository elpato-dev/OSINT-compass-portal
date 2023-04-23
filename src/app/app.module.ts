import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbInputModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbTabsetModule,
  NbButtonGroupModule,
  NbButtonModule,
  NbProgressBarModule,
  NbSpinnerModule,
  NbAutocompleteModule,
  NbListModule,
  NbAccordionModule,
  NbPopoverModule,
  NbDialogModule,
  NbToastrModule,
  NbTooltipModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TermDisplayComponent } from './result-page/term-display/term-display.component';
import { RecursiveDisplayComponent } from './result-page/recursive-display/recursive-display.component';
import { AlertSubscribeComponent } from './alert-subscribe/alert-subscribe.component';
import { ClickableUrlPipe } from '../pipes/clickableUrl/clickable-url.pipe';
import { PrettySentimentPipe } from '../pipes/prettySentiment/pretty-sentiment.pipe';
import { ResultPageComponent } from './result-page/result-page.component';
import { SnscrapeDisplayComponent } from './result-page/snscrape-display/snscrape-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    TermDisplayComponent,
    RecursiveDisplayComponent,
    AlertSubscribeComponent,
    ClickableUrlPipe,
    PrettySentimentPipe,
    ResultPageComponent,
    SnscrapeDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbInputModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbTabsetModule,
    NbButtonGroupModule,
    FormsModule,
    NbButtonModule,
    HttpClientModule,
    NbProgressBarModule,
    NbSpinnerModule,
    NbAutocompleteModule,
    NbListModule,
    NbAccordionModule,
    NbPopoverModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbTooltipModule,
    NbEvaIconsModule,
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
