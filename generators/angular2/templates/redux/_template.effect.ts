import "rxjs/add/operator/switchMap";
import "rxjs";
import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";

import { AppState } from "./index";
import { <%= name.pascal() %>Actions } from "./<%= name.kebab() %>.action";
import { <%= name.pascal() %>Service } from "./<%= name.kebab() %>.service";

@Injectable()
export class <%= name.pascal() %>Effects {

	constructor (
		private update$: Actions,
		private <%= name.camel() %>Actions: <%= name.pascal() %>Actions,
		private <%= name.camel() %>Service: <%= name.pascal() %>Service,
	) { }

	@Effect() load<%= name.pascal() %>s$ = this.update$
		.ofType(<%= name.pascal() %>Actions.LOAD_<%= name.uppersnake() %>S)
		.switchMap(() => this.<%= name.camel() %>Service.get<%= name.pascal() %>s())
		.map(<%= name.camel() %>s => this.<%= name.camel() %>Actions.load<%= name.pascal() %>sSuccess(<%= name.camel() %>s));
}
