function cov_1v767pw8hm() {
  var path =
    'C:\\Users\\terry\\projects\\cypress-test-web-component\\src\\main.ts';
  var hash = 'ac5e86ba7fb9868e1f2bb956ec2fbd3e05693750';
  var global = new Function('return this')();
  var gcv = '__coverage__';
  var coverageData = {
    path:
      'C:\\Users\\terry\\projects\\cypress-test-web-component\\src\\main.ts',
    statementMap: {
      '0': {
        start: {
          line: 12,
          column: 0,
        },
        end: {
          line: 14,
          column: 1,
        },
      },
      '1': {
        start: {
          line: 13,
          column: 2,
        },
        end: {
          line: 13,
          column: 19,
        },
      },
      '2': {
        start: {
          line: 16,
          column: 0,
        },
        end: {
          line: 18,
          column: 38,
        },
      },
      '3': {
        start: {
          line: 18,
          column: 18,
        },
        end: {
          line: 18,
          column: 36,
        },
      },
      '4': {
        start: {
          line: 20,
          column: 0,
        },
        end: {
          line: 22,
          column: 3,
        },
      },
      '5': {
        start: {
          line: 21,
          column: 2,
        },
        end: {
          line: 21,
          column: 25,
        },
      },
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 18,
            column: 9,
          },
          end: {
            line: 18,
            column: 10,
          },
        },
        loc: {
          start: {
            line: 18,
            column: 18,
          },
          end: {
            line: 18,
            column: 36,
          },
        },
        line: 18,
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 20,
            column: 22,
          },
          end: {
            line: 20,
            column: 23,
          },
        },
        loc: {
          start: {
            line: 20,
            column: 28,
          },
          end: {
            line: 22,
            column: 1,
          },
        },
        line: 20,
      },
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 12,
            column: 0,
          },
          end: {
            line: 14,
            column: 1,
          },
        },
        type: 'if',
        locations: [
          {
            start: {
              line: 12,
              column: 0,
            },
            end: {
              line: 14,
              column: 1,
            },
          },
          {
            start: {
              line: 12,
              column: 0,
            },
            end: {
              line: 14,
              column: 1,
            },
          },
        ],
        line: 12,
      },
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
    },
    f: {
      '0': 0,
      '1': 0,
    },
    b: {
      '0': [0, 0],
    },
    _coverageSchema: '1a1c01bbd47fc00a2c39e90264f33305004495a9',
    hash: 'ac5e86ba7fb9868e1f2bb956ec2fbd3e05693750',
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1v767pw8hm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1v767pw8hm();
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {
  applyPolyfills,
  defineCustomElements,
} from '@kpgs/angular-web-components/loader';
cov_1v767pw8hm().s[0]++;

if (environment.production) {
  cov_1v767pw8hm().b[0][0]++;
  cov_1v767pw8hm().s[1]++;
  enableProdMode();
} else {
  cov_1v767pw8hm().b[0][1]++;
}

cov_1v767pw8hm().s[2]++;
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {
    cov_1v767pw8hm().f[0]++;
    cov_1v767pw8hm().s[3]++;
    return console.error(err);
  });
cov_1v767pw8hm().s[4]++;
applyPolyfills().then(() => {
  cov_1v767pw8hm().f[1]++;
  cov_1v767pw8hm().s[5]++;
  defineCustomElements();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOlsiZW5hYmxlUHJvZE1vZGUiLCJwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIiwiQXBwTW9kdWxlIiwiZW52aXJvbm1lbnQiLCJhcHBseVBvbHlmaWxscyIsImRlZmluZUN1c3RvbUVsZW1lbnRzIiwicHJvZHVjdGlvbiIsImJvb3RzdHJhcE1vZHVsZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLGNBQVQsUUFBK0IsZUFBL0I7QUFDQSxTQUFTQyxzQkFBVCxRQUF1QyxtQ0FBdkM7QUFFQSxTQUFTQyxTQUFULFFBQTBCLGtCQUExQjtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsNEJBQTVCO0FBRUEsU0FDRUMsY0FERixFQUVFQyxvQkFGRixRQUdPLHFDQUhQOzs7QUFLQSxJQUFJRixXQUFXLENBQUNHLFVBQWhCLEVBQTRCO0FBQUE7QUFBQTtBQUMxQk4sRUFBQUEsY0FBYztBQUNmLENBRkQ7QUFBQTtBQUFBOzs7QUFJQUMsc0JBQXNCLEdBQ25CTSxlQURILENBQ21CTCxTQURuQixFQUVHTSxLQUZILENBRVVDLEdBQUQsSUFBUztBQUFBO0FBQUE7QUFBQSxTQUFBQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUFrQixDQUZwQzs7QUFJQUwsY0FBYyxHQUFHUSxJQUFqQixDQUFzQixNQUFNO0FBQUE7QUFBQTtBQUMxQlAsRUFBQUEsb0JBQW9CO0FBQ3JCLENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5cbmltcG9ydCB7XG4gIGFwcGx5UG9seWZpbGxzLFxuICBkZWZpbmVDdXN0b21FbGVtZW50cyxcbn0gZnJvbSAnQGtwZ3MvYW5ndWxhci13ZWItY29tcG9uZW50cy9sb2FkZXInO1xuXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKClcbiAgLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXG4gIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG5hcHBseVBvbHlmaWxscygpLnRoZW4oKCkgPT4ge1xuICBkZWZpbmVDdXN0b21FbGVtZW50cygpO1xufSk7XG4iXX0=
