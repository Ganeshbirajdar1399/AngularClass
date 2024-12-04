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

const routes: Routes = [
  { path: '', component: HomeComponent },//default routing
  { path: 'directive', component: DirectiveComponent },//name routing
  { path: 'databind', component: DataBindComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'temp', component: TemplateFormComponent },
  { path: 'pipes', redirectTo: 'parent' }, //redirect routing
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
  { path: '**', component: PagenotfoundComponent }, //wild routing
  { path: 'pipes', component: PipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
