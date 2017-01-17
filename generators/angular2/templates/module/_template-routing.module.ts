import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { <%= name.pascal() %>Component } from './<%= name.kebab() %>.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '<%= name.kebab() %>', component: <%= name.pascal() %>Component }
    ])
  ],
  exports: [RouterModule]
})
export class <%= name.pascal() %>RoutingModule { }
