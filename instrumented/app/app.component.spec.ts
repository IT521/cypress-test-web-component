/// <reference types="cypress" />

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { initEnv, mount } from 'cypress-angular-unit-test';
import { AppComponent } from './app.component';

describe('test web component', () => {
  beforeEach(() => {
    cy.document().then((doc) => {
      const script: HTMLScriptElement = document.createElement('script');
      script.type = 'module';
      script.src =
        '../../node_modules/@kpgs/angular-web-components/dist/angular-web-components/angular-web-components.esm.js';

      doc.head.appendChild(script);

      doc.body.classList.add('theme-light');
    });
    initEnv(AppComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it('awc-name', () => {
    mount(AppComponent, {
      props: {
        title: 'awc-name test',
        template: `<awc-name has-greeting="true" has-size-button="true" first="Alan" middle="M" last="Turing"></awc-name>`,
      },
    });

    cy.get('div[data-test="cypress-tests"]').should('exist');
    cy.get('awc-name').shadow().get('div').contains('Hello, World!');
  });
});
