import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../material-module';

import { CommonModule } from '@angular/common';
import { Bootstrap4FrameworkModule } from 'angular6-json-schema-form';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AgGridModule.withComponents([]),
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,Bootstrap4FrameworkModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
