import { Component } from '@angular/core';
import {
	async,
	TestBed
} from '@angular/core/testing';

import { <%= name.pascal() %>Module } from './<%= name.kebab() %>.module';

export function main() {
   describe('<%= name.pascal() %> component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [<%= name.pascal() %>Module]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let <%= name.camel() %>DOMEl = fixture.debugElement.children[0].nativeElement;

              expect(<%= name.camel() %>DOMEl.querySelectorAll('h2')[0].textContent).toEqual('<%= name.pascal() %>');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<<%= selector %>></<%= selector %>>'
})
class TestComponent {}
