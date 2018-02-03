
// An example configuration file.
exports.config = {
    directConnect: true, 
    
    capabilities: {
      'browserName': 'chrome'
    },
     
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
  specs: ['yandexmy-spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };