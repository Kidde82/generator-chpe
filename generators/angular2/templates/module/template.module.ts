import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= template.toUpper() %>Component } from './<%= template.toLower() %>.component';
import { <%= template.toUpper() %>RoutingModule } from './<%= template.toLower() %>-routing.module';

@NgModule({
  imports: [CommonModule, <%= template.toUpper() %>RoutingModule],
  declarations: [<%= template.toUpper() %>Component],
  exports: [<%= template.toUpper() %>Component]
})
export class <%= template.toUpper() %>Module { }
