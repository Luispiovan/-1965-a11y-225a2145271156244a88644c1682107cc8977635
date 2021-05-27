import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonModule } from './shared/components/yes-no-button/yes-no-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YesNoButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
