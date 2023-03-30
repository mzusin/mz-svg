
## Unit Tests

The library has two sets of unit tests, one for the browser environment and another for the Node.js environment. The reason for this is that some SVG features cannot be easily tested in a Node.js (jsdom) environment.

Browser unit tests are done using [Karma](https://github.com/karma-runner/karma) and [QUnit](https://qunitjs.com/). They can be launched with the following command:

```cmd
npm run test:browser
```

Node.js unit tests are done using [Jest](https://github.com/facebook/jest), and can be launched with the following command:

```cmd
npm test
```