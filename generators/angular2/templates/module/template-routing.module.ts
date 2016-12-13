import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { <%= template.toUpper() %>Component } from './<%= template.toLower() %>.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '<%= template.toLower() %>', component: <%= template.toUpper() %>Component }
    ])
  ],
  exports: [RouterModule]
})
export class <%= template.toUpper() %>RoutingModule { }
