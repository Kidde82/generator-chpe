import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= name.pascal() %>Component } from './<%= name.kebab() %>.component';
import { <%= name.pascal() %>RoutingModule } from './<%= name.kebab() %>-routing.module';

@NgModule({
  imports: [CommonModule, <%= name.pascal() %>RoutingModule],
  declarations: [<%= name.pascal() %>Component],
  exports: [<%= name.pascal() %>Component]
})
export class <%= name.pascal() %>Module { }
