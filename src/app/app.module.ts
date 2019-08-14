import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { RouterPageComponent } from './router-page.component'
import { TwoPageComponent } from './components/two-page.component'

import { MapService } from './services/mapService'

import { AppRoutingModule } from './app-routing.module';

import {
  MatButtonModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSliderModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RouterPageComponent,
    TwoPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MapService],
  bootstrap: [RouterPageComponent]
})
export class AppModule { }
