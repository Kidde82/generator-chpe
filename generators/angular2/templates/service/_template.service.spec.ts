import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { <%= name.pascal() %>Service } from './<%= name.kebab() %>.service';

export function main() {
	describe('<%= name.pascal() %> Service', () => {
		let <%= name.camel() %>Service: <%= name.pascal() %>Service;
		let mockBackend: MockBackend;

		beforeEach(() => {

			TestBed.configureTestingModule({
				providers: [
					<%= name.pascal() %>Service,
					MockBackend,
					BaseRequestOptions,
					{
						provide: Http,
						useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
						deps: [MockBackend, BaseRequestOptions]
					}
				]
			});
		});

		it('should return an Observable when get called', async(() => {
			expect(TestBed.get(<%= name.pascal() %>Service).get()).toEqual(jasmine.any(Observable));
		}));

		it('should resolve to list of names when get called', async(() => {
			let <%= name.camel() %>Service = TestBed.get(<%= name.pascal() %>Service);
			let mockBackend = TestBed.get(MockBackend);

			mockBackend.connections.subscribe((c: any) => {
				c.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));
			});

			<%= name.camel() %>Service.get().subscribe((data: any) => {
				expect(data).toEqual(['Dijkstra', 'Hopper']);
			});
		}));
	});
}
