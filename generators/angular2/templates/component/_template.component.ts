import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: '<%= selector %>',
	templateUrl: '<%= name.kebab() %>.component.html',
	styleUrls: ['<%= name.kebab() %>.component.css'],
})
export class <%= name.pascal() %>Component { }
