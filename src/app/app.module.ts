import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { CardFormComponent } from './card-form/card-form.component'
import { CardDisplayComponent } from './card-display/card-display.component'
import { ButtonComponent } from './button/button.component'
import { InputComponent } from './input/input.component'

@NgModule({
  declarations: [AppComponent, CardFormComponent, CardDisplayComponent, ButtonComponent, InputComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
