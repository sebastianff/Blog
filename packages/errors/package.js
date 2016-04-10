Package.describe({
  name: 'sebo:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A pattern to display errors',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errorsList.html','errorsList.js'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sebo:errors');
  api.addFiles('errors-tests.js');
});
