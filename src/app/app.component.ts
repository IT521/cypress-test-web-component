import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <div data-test="cypress-tests">
      <ng-container *ngIf="props">
        <h2
          *ngIf="props.title"
          style="text-align: center;text-transform: capitalize;margin-bottom: 32px;"
        >
          {{ props.title }} is running!
        </h2>
        <div
          *ngIf="props.template"
          class="center"
          [innerHTML]="sanitizeHtml(props.template)"
        ></div>
      </ng-container>
    </div>
  `,
  styles: ['.center { text-align: center; }'],
})
export class AppComponent implements OnInit {
  @Input() props: any = {
    title: 'Cypress Test Web Component',
    template: `<awc-name has-greeting="true" has-size-button="true" first="Alan" middle="M" last="Turing"></awc-name>`,
  };

  constructor(private _sanitizer: DomSanitizer) {
    console.log('Cypress Test Web Component is running');
  }

  ngOnInit(): void {}

  public sanitizeHtml(value: any): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
