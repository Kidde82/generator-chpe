import * as _ from "lodash";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import { <%= name.pascal() %> } from "./<%= name.kebab() %>.model";
import { <%= name.pascal() %>Actions } from "./<%= name.kebab() %>.action";

export type <%= name.pascal() %>ListState = <%= name.pascal() %>[];

const initialState: <%= name.pascal() %>ListState = [];

export default function (state = initialState, action: Action): <%= name.pascal() %>ListState {
	switch (action.type) {
		case <%= name.pascal() %>Actions.LOAD_<%= name.uppersnake() %>S_SUCCESS: {
			return action.payload;
		}
		case <%= name.pascal() %>Actions.ADD_<%= name.uppersnake() %>_SUCCESS: {
			return [...state, action.payload];
		}
		case <%= name.pascal() %>Actions.UPDATE_<%= name.uppersnake() %>_SUCCESS: {
			let index = _.findIndex(state, {id: action.payload.id});
			return [
				...state.slice(0, index),
				action.payload,
				...state.slice(index + 1)
			];
		}
		default: {
			return state;
		}
	}
}
