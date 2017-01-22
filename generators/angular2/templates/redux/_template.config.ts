import { Injectable } from "@angular/core";

@Injectable()
export class <%= name.pascal() %>ConfigService {
	get<%= name.pascal() %>Endpoint(): string {
		return "<%= name.camel() %>s/";
	}
}
