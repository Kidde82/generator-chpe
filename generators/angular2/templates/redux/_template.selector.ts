import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { AppState } from "./index";
import { <%= name.pascal() %> } from "./<%= name.kebab() %>.model";

@Injectable()
export class <%= name.pascal() %>Selector {
	get<%= name.pascal() %>s() {
		return (state: AppState): <%= name.pascal() %>[] => state.<%= name.camel() %>s;
	}
}
