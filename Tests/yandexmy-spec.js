const lib = require('./lib');

describe("CompareServicesYandex", function () {
    browser.ignoreSynchronization = true;    
    it("CompareServicesForLondonAndParis", function(){
        lib.GoToYandex();       
        lib.ChangeLocation();
        lib.GetInfo(); 
    });

});