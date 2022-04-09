import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import  { FormsModule } from '@angular/forms';
import { QuoteComponent} from './Components/quote/quote.component';
import { QuoteDetailsComponent } from './Components/quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { HeaderComponent } from './Components/header/header.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateCountPipe } from './date-count.pipe';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    HighlightDirective,
    HeaderComponent,
    QuoteFormComponent,
    DateCountPipe,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
