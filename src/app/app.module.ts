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
  NbAutocompleteModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ResultPageComponent } from './result-page/result-page.component';
import { RecursiveDisplayComponent } from './recursive-display/recursive-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultPageComponent,
    RecursiveDisplayComponent
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
    NbAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
