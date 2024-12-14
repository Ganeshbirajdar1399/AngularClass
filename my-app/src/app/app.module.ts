import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyledirectveDirective } from './directives/styledirectve.directive';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { SquarePipe } from './pipes/square.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormComponent } from './components/form/form.component';
import { BikeComponent } from './ass/bike/bike.component';
import { MobilesComponent } from './ass/mobiles/mobiles.component';
import { ElectronicsComponent } from './ass/electronics/electronics.component';
import { AutomobileComponent } from './ass/automobile/automobile.component';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CrudComponent } from './components/crud/crud.component';





@NgModule({
  declarations: [
    AppComponent,
    DataBindComponent,
    DirectiveComponent,
    StyledirectveDirective,
    PipeComponent,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    FormComponent,
    BikeComponent,
    MobilesComponent,
    ElectronicsComponent,
    AutomobileComponent,
    ViewChildComponent,
    UserdataComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
