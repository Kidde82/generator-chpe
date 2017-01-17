import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded <%= name.kebab() %>Component.
 */
@Component({
  moduleId: module.id,
  selector: '<%= selector %>',
  templateUrl: '<%= name.kebab() %>.component.html',
  styleUrls: ['<%= name.kebab() %>.component.css']
})
export class <%= name.pascal() %>Component { }
