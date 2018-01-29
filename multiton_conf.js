// An example configuration file.
exports.config = {
    directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome',
      shardTestFiles: true,
      maxInstances: 2
    },
 
    // multiCapabilities: [
    //     {
    //         shardTestFiles: true,
    //         maxInstances: 2,
    //         'browserName': 'chrome',
    //         specs: ['m1-spec.js', 'm2-spec.js']
    //     }         
    // ],
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['m1-spec.js','m2-spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };