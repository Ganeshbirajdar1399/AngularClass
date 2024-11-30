import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { PipesPipe } from './pipe/pipes.pipe';
import { DirectivesDirective } from './directives/directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    DataBindComponent,
    ChildComponent,
    ParentComponent,
    DirectiveComponent,
    PipeComponent,
    PipesPipe,
    DirectivesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
