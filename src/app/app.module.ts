import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Components/AddTask/add.component';
import { ListTaskComponent } from './Components/list-task/list-task.component';
import { ConfirmDeleteDirective } from './Directive/confirm-delete.directive';
import { StatusTaskDirective } from './Directive/status-task.directive';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListTaskComponent,
    StatusTaskDirective,
    ConfirmDeleteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
