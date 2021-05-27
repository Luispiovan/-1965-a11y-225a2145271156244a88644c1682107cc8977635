import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YesNoButtonModule } from './shared/components/yes-no-button/yes-no-button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableControlDirective } from './shared/directives/disable-control/disable-control.directive';
import { DisableControlModule } from './shared/directives/disable-control/disable-control.module';

@NgModule({
  declarations: [AppComponent, DisableControlDirective],
  imports: [
    BrowserModule,
    YesNoButtonModule,
    ReactiveFormsModule,
    FormsModule,
    DisableControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
