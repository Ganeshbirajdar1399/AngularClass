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
import { CrudComponent } from './components/crud/crud.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { authGuard } from './guards/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { homedir } from 'node:os';

const routes: Routes = [
  { path: '', component: ReactiveFormComponent }, //default routing
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  {
    path: 'directive',
    canActivate: [authGuard],
    component: DirectiveComponent,
  }, //name routing
  { path: 'databind', canActivate: [authGuard], component: DataBindComponent },
  { path: 'child', canActivate: [authGuard], component: ChildComponent },
  { path: 'parent', canActivate: [authGuard], component: ParentComponent },
  { path: 'temp', canActivate: [authGuard], component: TemplateFormComponent },
  { path: 'react', canActivate: [authGuard], component: ReactiveFormComponent },
  { path: 'form/:id', canActivate: [authGuard], component: FormComponent },
  { path: 'pipes', canActivate: [authGuard], component: PipeComponent },
  {
    path: 'viewchild',
    canActivate: [authGuard],
    component: ViewChildComponent,
  },
  {
    path: 'servicedata',
    component: UserdataComponent,
  },
  { path: 'crud', component: CrudComponent },
  {
    path: 'pagination',
    component: PaginationComponent,
  },
  { path: '**', component: PagenotfoundComponent }, //wild routing

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
