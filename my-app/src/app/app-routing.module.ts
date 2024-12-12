import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormComponent } from './components/form/form.component';
import { AutomobileComponent } from './ass/automobile/automobile.component';
import { MobilesComponent } from './ass/mobiles/mobiles.component';
import { BikeComponent } from './ass/bike/bike.component';
import { ElectronicsComponent } from './ass/electronics/electronics.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { UserdataComponent } from './components/userdata/userdata.component';

const routes: Routes = [
  { path: '', component: HomeComponent },//default routing
  { path: 'directive', component: DirectiveComponent },//name routing
  { path: 'databind', component: DataBindComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'temp', component: TemplateFormComponent },
  { path: 'react', component: ReactiveFormComponent },
  // { path: 'Automobile', component: AutomobileComponent},
  // { path: 'Mobiles', component: MobilesComponent},
  // { path: 'Bikes', component: BikeComponent},
  // { path: 'Electronics', component: ElectronicsComponent},
  
  // { path: 'pipes', redirectTo: 'parent' }, //redirect routing
  // {
  //   path: 'form',
  //   component: FormComponent,
  //   children:[ 
  //     {
  //       path: 'temp',
  //       component: TemplateFormComponent,
  //     },
  //     {
  //       path: 'react',
  //       component: ReactiveFormComponent,
  //     },
  //   ],
  // },
  //child routing

  { path:'form/:id', component: FormComponent},
  { path: 'pipes', component: PipeComponent },
  { path:'viewchild', component:ViewChildComponent},
  { path:'user', component:UserdataComponent},
  { path: '**', component: PagenotfoundComponent }, //wild routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
