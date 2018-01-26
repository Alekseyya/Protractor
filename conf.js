exports.config = {
  'autoStartStopServer': true,

  capabilities: {
    'browserName': 'internet explorer'
  },
 
  //directConnect: true,  
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'chrome'
  // }, {
  //   'browserName': 'internet explorer'
  // }],
  
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['my-spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};