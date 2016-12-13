import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: '<%= template-selector %>',
  templateUrl: '<%= template.toLower() %>.component.html',
  styleUrls: ['<%= template.toLower() %>.component.css']
})
export class <%= template.toUpper() %>Component { }
