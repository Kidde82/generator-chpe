import "rxjs/add/operator/count";
import "rxjs/add/operator/map";
import { Injectable, Inject } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { <%= name.pascal() %> } from "./<%= name.kebab() %>.model";
import { <%= name.pascal() %>Client } from "./<%= name.kebab() %>.client";

@Injectable()
export class <%= name.pascal() %>Service {

	constructor (
		private client: <%= name.pascal() %>Client
	) { }

	get<%= name.pascal() %>s(): Observable<<%= name.pascal() %>[]> {
		return this.client.get<%= name.pascal() %>s();
	}

	save(<%= name.camel() %>: <%= name.pascal() %>): Observable<<%= name.pascal() %>> {
		return this.client.save(<%= name.camel() %>);
	}

	update(<%= name.camel() %>: <%= name.pascal() %>): Observable<<%= name.pascal() %>> {
		return this.client.update(<%= name.camel() %>);
	}
}
