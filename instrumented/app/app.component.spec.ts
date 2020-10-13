function cov_jd740m33q() {
  var path =
    'C:\\Users\\terry\\projects\\cypress-test-web-component\\src\\app\\app.component.spec.ts';
  var hash = 'ab2239a703e5749bd0cf7f7a7d57f14bde003853';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      'C:\\Users\\terry\\projects\\cypress-test-web-component\\src\\app\\app.component.spec.ts',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 0,
        },
        end: {
          line: 39,
          column: 3,
        },
      },
      '1': {
        start: {
          line: 8,
          column: 2,
        },
        end: {
          line: 22,
          column: 5,
        },
      },
      '2': {
        start: {
          line: 9,
          column: 4,
        },
        end: {
          line: 18,
          column: 7,
        },
      },
      '3': {
        start: {
          line: 10,
          column: 40,
        },
        end: {
          line: 10,
          column: 72,
        },
      },
      '4': {
        start: {
          line: 11,
          column: 6,
        },
        end: {
          line: 11,
          column: 29,
        },
      },
      '5': {
        start: {
          line: 12,
          column: 6,
        },
        end: {
          line: 13,
          column: 116,
        },
      },
      '6': {
        start: {
          line: 15,
          column: 6,
        },
        end: {
          line: 15,
          column: 35,
        },
      },
      '7': {
        start: {
          line: 17,
          column: 6,
        },
        end: {
          line: 17,
          column: 44,
        },
      },
      '8': {
        start: {
          line: 19,
          column: 4,
        },
        end: {
          line: 21,
          column: 7,
        },
      },
      '9': {
        start: {
          line: 24,
          column: 2,
        },
        end: {
          line: 38,
          column: 5,
        },
      },
      '10': {
        start: {
          line: 25,
          column: 4,
        },
        end: {
          line: 30,
          column: 7,
        },
      },
      '11': {
        start: {
          line: 32,
          column: 4,
        },
        end: {
          line: 32,
          column: 61,
        },
      },
      '12': {
        start: {
          line: 33,
          column: 4,
        },
        end: {
          line: 37,
          column: 33,
        },
      },
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 7,
            column: 31,
          },
          end: {
            line: 7,
            column: 32,
          },
        },
        loc: {
          start: {
            line: 7,
            column: 37,
          },
          end: {
            line: 39,
            column: 1,
          },
        },
        line: 7,
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 8,
            column: 13,
          },
          end: {
            line: 8,
            column: 14,
          },
        },
        loc: {
          start: {
            line: 8,
            column: 19,
          },
          end: {
            line: 22,
            column: 3,
          },
        },
        line: 8,
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 9,
            column: 23,
          },
          end: {
            line: 9,
            column: 24,
          },
        },
        loc: {
          start: {
            line: 9,
            column: 32,
          },
          end: {
            line: 18,
            column: 5,
          },
        },
        line: 9,
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 24,
            column: 17,
          },
          end: {
            line: 24,
            column: 18,
          },
        },
        loc: {
          start: {
            line: 24,
            column: 23,
          },
          end: {
            line: 38,
            column: 3,
          },
        },
        line: 24,
      },
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      '10': 0,
      '11': 0,
      '12': 0,
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
    },
    b: {},
    _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
    hash: 'ab2239a703e5749bd0cf7f7a7d57f14bde003853',
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jd740m33q = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_jd740m33q();
/// <reference types="cypress" />
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { initEnv, mount } from 'cypress-angular-unit-test';
import { AppComponent } from './app.component';
cov_jd740m33q().s[0]++;
describe('test web component', () => {
  cov_jd740m33q().f[0]++;
  cov_jd740m33q().s[1]++;
  beforeEach(() => {
    cov_jd740m33q().f[1]++;
    cov_jd740m33q().s[2]++;
    cy.document().then((doc) => {
      cov_jd740m33q().f[2]++;
      const script: HTMLScriptElement =
        (cov_jd740m33q().s[3]++, document.createElement('script'));
      cov_jd740m33q().s[4]++;
      script.type = 'module';
      cov_jd740m33q().s[5]++;
      script.src =
        '../../node_modules/@kpgs/angular-web-components/dist/angular-web-components/angular-web-components.esm.js';
      cov_jd740m33q().s[6]++;
      doc.head.appendChild(script);
      cov_jd740m33q().s[7]++;
      doc.body.classList.add('theme-light');
    });
    cov_jd740m33q().s[8]++;
    initEnv(AppComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });
  cov_jd740m33q().s[9]++;
  it('awc-name', () => {
    cov_jd740m33q().f[3]++;
    cov_jd740m33q().s[10]++;
    mount(AppComponent, {
      props: {
        title: 'awc-name test',
        template: `<awc-name has-greeting="true" has-size-button="true" first="Alan" middle="M" last="Turing"></awc-name>`,
      },
    });
    cov_jd740m33q().s[11]++;
    cy.get('div[data-test="cypress-tests"]').should('exist');
    cov_jd740m33q().s[12]++;
    cy.get('awc-name')
      .shadow()
      .get('div.awc-name')
      .get('div')
      .contains('Hello, World!');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6WyJDVVNUT01fRUxFTUVOVFNfU0NIRU1BIiwiaW5pdEVudiIsIm1vdW50IiwiQXBwQ29tcG9uZW50IiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiY3kiLCJkb2N1bWVudCIsInRoZW4iLCJkb2MiLCJzY3JpcHQiLCJIVE1MU2NyaXB0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwic3JjIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNjaGVtYXMiLCJpdCIsInByb3BzIiwidGl0bGUiLCJ0ZW1wbGF0ZSIsImdldCIsInNob3VsZCIsInNoYWRvdyIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaO0FBRUEsU0FBU0Esc0JBQVQsUUFBdUMsZUFBdkM7QUFDQSxTQUFTQyxPQUFULEVBQWtCQyxLQUFsQixRQUErQiwyQkFBL0I7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGlCQUE3Qjs7QUFFQUMsUUFBUSxDQUFDLG9CQUFELEVBQXVCLE1BQU07QUFBQTtBQUFBO0FBQ25DQyxFQUFBQSxVQUFVLENBQUMsTUFBTTtBQUFBO0FBQUE7QUFDZkMsSUFBQUEsRUFBRSxDQUFDQyxRQUFILEdBQWNDLElBQWQsQ0FBb0JDLEdBQUQsSUFBUztBQUFBO0FBQzFCLFlBQU1DLE1BQU0sRUFBRUMsaUJBQWlCLDRCQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBSCxDQUEvQjtBQUQwQjtBQUUxQkYsTUFBQUEsTUFBTSxDQUFDRyxJQUFQLEdBQWMsUUFBZDtBQUYwQjtBQUcxQkgsTUFBQUEsTUFBTSxDQUFDSSxHQUFQLEdBQ0UsMkdBREY7QUFIMEI7QUFNMUJMLE1BQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxXQUFULENBQXFCTixNQUFyQjtBQU4wQjtBQVExQkQsTUFBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGFBQXZCO0FBQ0QsS0FURDtBQURlO0FBV2ZsQixJQUFBQSxPQUFPLENBQUNFLFlBQUQsRUFBZTtBQUNwQmlCLE1BQUFBLE9BQU8sRUFBRSxDQUFDcEIsc0JBQUQ7QUFEVyxLQUFmLENBQVA7QUFHRCxHQWRTLENBQVY7QUFEbUM7QUFpQm5DcUIsRUFBQUEsRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFNO0FBQUE7QUFBQTtBQUNuQm5CLElBQUFBLEtBQUssQ0FBQ0MsWUFBRCxFQUFlO0FBQ2xCbUIsTUFBQUEsS0FBSyxFQUFFO0FBQ0xDLFFBQUFBLEtBQUssRUFBRSxlQURGO0FBRUxDLFFBQUFBLFFBQVEsRUFBRztBQUZOO0FBRFcsS0FBZixDQUFMO0FBRG1CO0FBUW5CbEIsSUFBQUEsRUFBRSxDQUFDbUIsR0FBSCxDQUFPLGdDQUFQLEVBQXlDQyxNQUF6QyxDQUFnRCxPQUFoRDtBQVJtQjtBQVNuQnBCLElBQUFBLEVBQUUsQ0FBQ21CLEdBQUgsQ0FBTyxVQUFQLEVBQ0dFLE1BREgsR0FFR0YsR0FGSCxDQUVPLGNBRlAsRUFHR0EsR0FISCxDQUdPLEtBSFAsRUFJR0csUUFKSCxDQUlZLGVBSlo7QUFLRCxHQWRDLENBQUY7QUFlRCxDQWhDTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cblxuaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW5pdEVudiwgbW91bnQgfSBmcm9tICdjeXByZXNzLWFuZ3VsYXItdW5pdC10ZXN0JztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmRlc2NyaWJlKCd0ZXN0IHdlYiBjb21wb25lbnQnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGN5LmRvY3VtZW50KCkudGhlbigoZG9jKSA9PiB7XG4gICAgICBjb25zdCBzY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgc2NyaXB0LnNyYyA9XG4gICAgICAgICcuLi8uLi9ub2RlX21vZHVsZXMvQGtwZ3MvYW5ndWxhci13ZWItY29tcG9uZW50cy9kaXN0L2FuZ3VsYXItd2ViLWNvbXBvbmVudHMvYW5ndWxhci13ZWItY29tcG9uZW50cy5lc20uanMnO1xuXG4gICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgICBkb2MuYm9keS5jbGFzc0xpc3QuYWRkKCd0aGVtZS1saWdodCcpO1xuICAgIH0pO1xuICAgIGluaXRFbnYoQXBwQ29tcG9uZW50LCB7XG4gICAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdhd2MtbmFtZScsICgpID0+IHtcbiAgICBtb3VudChBcHBDb21wb25lbnQsIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiAnYXdjLW5hbWUgdGVzdCcsXG4gICAgICAgIHRlbXBsYXRlOiBgPGF3Yy1uYW1lIGhhcy1ncmVldGluZz1cInRydWVcIiBoYXMtc2l6ZS1idXR0b249XCJ0cnVlXCIgZmlyc3Q9XCJBbGFuXCIgbWlkZGxlPVwiTVwiIGxhc3Q9XCJUdXJpbmdcIj48L2F3Yy1uYW1lPmAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY3kuZ2V0KCdkaXZbZGF0YS10ZXN0PVwiY3lwcmVzcy10ZXN0c1wiXScpLnNob3VsZCgnZXhpc3QnKTtcbiAgICBjeS5nZXQoJ2F3Yy1uYW1lJylcbiAgICAgIC5zaGFkb3coKVxuICAgICAgLmdldCgnZGl2LmF3Yy1uYW1lJylcbiAgICAgIC5nZXQoJ2RpdicpXG4gICAgICAuY29udGFpbnMoJ0hlbGxvLCBXb3JsZCEnKTtcbiAgfSk7XG59KTtcbiJdfQ==
