import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

import { <%= name.pascal() %> } from "./<%= name.kebab() %>.model";

@Injectable()
export class <%= name.pascal() %>Actions {
	static LOAD_<%= name.uppersnake() %>S = "[<%= name.pascal() %>] Load <%= name.pascal() %>s";
	static LOAD_<%= name.uppersnake() %>S_SUCCESS = "[<%= name.pascal() %>] Load <%= name.pascal() %>s Success";
	static ADD_<%= name.uppersnake() %> = "[<%= name.pascal() %>] Add <%= name.pascal() %>";
	static ADD_<%= name.uppersnake() %>_SUCCESS = "[<%= name.pascal() %>] Add <%= name.pascal() %> Success";
	static UPDATE_<%= name.uppersnake() %> = "[<%= name.pascal() %>] Update <%= name.pascal() %>";
	static UPDATE_<%= name.uppersnake() %>_SUCCESS = "[<%= name.pascal() %>] Update <%= name.pascal() %> Success";
	static DELETE_<%= name.uppersnake() %> = "[<%= name.pascal() %>] Update <%= name.pascal() %>";
	static DELETE_<%= name.uppersnake() %>_SUCCESS = "[<%= name.pascal() %>] Update <%= name.pascal() %> Success";

	load<%= name.pascal() %>s(): Action {
		return {
			type: <%= name.pascal() %>Actions.LOAD_<%= name.uppersnake() %>S
		};
	}

	load<%= name.pascal() %>sSuccess(<%= name.camel() %>s: <%= name.pascal() %>[]): Action {
		return {
			type: <%= name.pascal() %>Actions.LOAD_<%= name.uppersnake() %>S_SUCCESS,
			payload: <%= name.camel() %>s
		};
	}

	add<%= name.pascal() %>(<%= name.camel() %>: <%= name.pascal() %>): Action {
		return {
			type: <%= name.pascal() %>Actions.ADD_<%= name.uppersnake() %>,
			payload: <%= name.camel() %>
		};
	}

	add<%= name.pascal() %>Success(<%= name.camel() %>: <%= name.pascal() %>): Action {
		return {
			type: <%= name.pascal() %>Actions.ADD_<%= name.uppersnake() %>_SUCCESS,
			payload: <%= name.camel() %>
		};
	}

	update<%= name.pascal() %>(<%= name.camel() %>: <%= name.pascal() %>): Action {
		return {
			type: <%= name.pascal() %>Actions.UPDATE_<%= name.uppersnake() %>,
			payload: <%= name.camel() %>
		};
	}

	update<%= name.pascal() %>Success(<%= name.camel() %>: <%= name.pascal() %>): Action {
		return {
			type: <%= name.pascal() %>Actions.UPDATE_<%= name.uppersnake() %>_SUCCESS,
			payload: <%= name.camel() %>
		};
	}

	delete<%= name.pascal() %>(<%= name.camel() %>: <%= name.pascal() %>): Action {
		return {
			type: <%= name.pascal() %>Actions.DELETE_<%= name.uppersnake() %>,
			payload: <%= name.camel() %>
		};
	}

	delete<%= name.pascal() %>Success(<%= name.camel() %>: <%= name.pascal() %>): Action {
		return {
			type: <%= name.pascal() %>Actions.DELETE_<%= name.uppersnake() %>_SUCCESS,
			payload: <%= name.camel() %>
		};
	}
}
