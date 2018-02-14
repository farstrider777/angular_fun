require('./app.module');
require('../node_modules/angular-mocks/angular-mocks');

// Include *.spec.js files
const testsContext = require.context('.', true, /.+\.spec\.js$/);
testsContext.keys().forEach(testsContext);
