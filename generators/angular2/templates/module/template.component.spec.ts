import { Component } from '@angular/core';
import {
	async,
	TestBed
} from '@angular/core/testing';

import { <%= template.toUpper() %>Module } from './<%= template.toLower() %>.module';

export function main() {
   describe('<%= template.toUpper() %> component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [<%= template.toUpper() %>Module]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let <%= template.toLower %>DOMEl = fixture.debugElement.children[0].nativeElement;

              expect(<%= template.toLower() %>DOMEl.querySelectorAll('h2')[0].textContent).toEqual('<%= template.toUpper() %>');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<<%= template-selector %>></<%= template-selector %>>'
})
class TestComponent {}
