import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { InitialTextComponent } from './components/initial-text/initial-text.component';

import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CompanyService } from './services/company.service';
import { HttpClientModule } from '@angular/common/http';
import { PhonePipe } from './pipes/phone.pipe';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    ListPageComponent,
    HeaderComponent,
    FormComponent,
    ListComponent,
    InitialTextComponent,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatCardModule


  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
