import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { UserCardComponent } from './test-component/user-card/user-card.component';
import { LicenseCardComponent } from './test-component/license-card/license-card.component';
import { LoadingSpinnerComponent } from './common-tools/loading-spinner/loading-spinner.component';
import { ErrorCardComponent } from './error-card/error-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    UserCardComponent,
    LicenseCardComponent,
    LoadingSpinnerComponent,
    ErrorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
