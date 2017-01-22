import "@ngrx/core/add/operator/select";
import { compose } from "@ngrx/core/compose";
import { combineReducers } from "@ngrx/store";
import { storeLogger } from "ngrx-store-logger";

import { <%= name.pascal() %>Actions } from "./<%= name.kebab() %>.action";
import { <%= name.pascal() %>Effects } from "./<%= name.kebab() %>.effect";
import { <%= name.pascal() %>, <%= name.pascal() %>Type } from "./<%= name.kebab() %>.model";
import { <%= name.pascal() %>State } from "./<%= name.kebab() %>.reducer";
import { <%= name.pascal() %>Selector } from "./<%= name.kebab() %>.selector";
import { <%= name.pascal() %>Service } from "./<%= name.kebab() %>.service";
import { <%= name.pascal() %>ListState } from "./<%= name.kebab() %>-list.reducer";
import { <%= name.pascal() %>ConfigService } from "./<%= name.kebab() %>.config";
import { <%= name.uppersnake() %>_TYPE } from "./<%= name.kebab() %>.const";
import { <%= name.pascal() %>Client } from "./<%= name.kebab() %>.client";

export {
	<%= name.pascal() %>Actions,
	<%= name.pascal() %>Effects,
	<%= name.pascal() %>,
	<%= name.pascal() %>State,
	<%= name.pascal() %>Selector,
	<%= name.pascal() %>Service,
	<%= name.pascal() %>ListState,
	<%= name.pascal() %>ConfigService,
	<%= name.pascal() %>Type,
	<%= name.uppersnake() %>_TYPE,
	<%= name.pascal() %>Client
}

import <%= name.camel() %>ListReducer, * as from<%= name.pascal() %>List from "./<%= name.kebab() %>-list.reducer";
import <%= name.camel() %>Reducer, * as from<%= name.pascal() %> from "./<%= name.kebab() %>.reducer";

export interface AppState {
	<%= name.camel() %>s: from<%= name.pascal() %>List.<%= name.pascal() %>ListState,
	<%= name.camel() %>: from<%= name.pascal() %>.<%= name.pascal() %>State
};

export default compose(storeLogger(), combineReducers)({
	<%= name.camel() %>s: <%= name.camel() %>ListReducer,
	<%= name.camel() %>: <%= name.camel() %>Reducer
});
