// An example configuration file.
exports.config = {
    //directConnect: true,
    //seleniumArgs: ['-Dwebdriver.ie.driver=<path to IEDriverServer.exe>']
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'internet explorer',
        'platform': 'ANY',
        'version': '11',
        'ignoreProtectedModeSettings': true
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
    specs: ['ie-spec.js'],
  
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };