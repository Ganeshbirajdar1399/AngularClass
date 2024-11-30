import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';







@NgModule({
  declarations: [
    AppComponent,
    DataBindComponent,
    DirectiveComponent,
    PipeComponent,
    ParentComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
