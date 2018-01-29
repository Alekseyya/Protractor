// An example configuration file.
exports.config = {
    directConnect: false,    
    capabilities: {
      'browserName': 'internet explorer'      
    },
    
    localSeleniumStandaloneOpts: {
      jvmArgs: [
        '-Dwebdriver.ie.driver=D:/TMP/IEDriverServer_x64_3.8.0/IEDriverServer.exe'
      ]
    },
    
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