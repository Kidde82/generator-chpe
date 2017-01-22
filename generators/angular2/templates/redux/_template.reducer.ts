import { Action } from "@ngrx/store";

import { <%= name.pascal() %> } from "./<%= name.kebab() %>.model";
import { <%= name.pascal() %>Actions } from "./<%= name.kebab() %>.action";
import { <%= name.uppersnake() %>_TYPE } from "./<%= name.kebab() %>.const";

export type <%= name.pascal() %>State = <%= name.pascal() %>;

const initialState: <%= name.pascal() %>State = {
	id: "0",
	name: "",
	type: "Small"
};

export default function (state= initialState, action: Action): <%= name.pascal() %>State {
	switch (action.type) {
		default: {
			return state;
		}
	}
}
