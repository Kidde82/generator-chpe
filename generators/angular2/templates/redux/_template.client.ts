import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
	Http,
	Headers,
	RequestOptions,
	Response
} from "@angular/http";

import { <%= name.pascal() %> } from "./<%= name.kebab() %>.model";
import { <%= name.pascal() %>ConfigService } from "./<%= name.kebab() %>.config";

@Injectable()
export class <%= name.pascal() %>Client {

	// private apiUrl: string = "http://localhost:3001/api/v1/";
	private apiUrl: string = "http://localhost:3001/";

	constructor (
		private http: Http,
		private config: <%= name.pascal() %>ConfigService
	) { }

	get<%= name.pascal() %>s(): Observable<<%= name.pascal() %>[]> {
		return this.http.get(this.apiUrl + this.config.get<%= name.pascal() %>Endpoint())
				.map(res => {
					return res.json();
				});
	}

	save(<%= name.camel() %>: <%= name.pascal() %>): Observable<<%= name.pascal() %>> {
		let headers = new Headers({ "Content-Type": "application/json" });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.apiUrl + this.config.get<%= name.pascal() %>Endpoint(), <%= name.camel() %>, options)
				.map(this.extractData)
				.catch(this.handleError);
	}

	update(<%= name.camel() %>: <%= name.pascal() %>): Observable<<%= name.pascal() %>> {
		let headers = new Headers({ "Content-Type": "application/json" });
		let options = new RequestOptions({ headers: headers });

		return this.http.put(this.apiUrl + this.config.get<%= name.pascal() %>Endpoint() + <%= name.camel() %>.id, <%= name.camel() %>, options)
				.map(this.extractData)
				.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || "";
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
