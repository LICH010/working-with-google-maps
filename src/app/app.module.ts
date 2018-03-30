import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterPageComponent } from './router-page.component'
import { TwoPageComponent } from './two-page.component'

import { MapService } from './mapService'

import { AppRoutingModule }     from './app-routing.module';

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
