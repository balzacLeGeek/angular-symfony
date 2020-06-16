import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListClientComponent } from './list-client/list-client.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientService } from './services/client.service';
import { AddClientComponent } from './add-client/add-client.component';

import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { EditerComponentComponent } from './editer-component/editer-component.component';

const routesApplication: Routes = [
  { path: 'ajout-client', component: AddClientComponent },
  { path: 'liste-client', component: ListClientComponent },
  { path: 'editer-client/:id', component: EditerComponentComponent },
  { path: '', component: ListClientComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ListClientComponent,
    AddClientComponent,
    EditerComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routesApplication),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
