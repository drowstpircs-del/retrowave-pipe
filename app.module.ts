import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormatTextPipe } from './format-text.pipe'; // Import your pipe

@NgModule({
  declarations: [
    AppComponent,
    FormatTextPipe // Declare it here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
