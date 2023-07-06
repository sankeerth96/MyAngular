import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { SavedataService } from './savedata.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule, 
    NgIf,
    MatIconModule,
    HttpClientModule,
    MdbCollapseModule
  ],
  providers: [SavedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
