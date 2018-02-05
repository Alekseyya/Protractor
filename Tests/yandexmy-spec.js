const lib = require('./lib');

describe("CompareServicesYandex", function () {
    browser.ignoreSynchronization = true;    
    it("CompareServicesForLondonAndParis", function(){
        lib.GoToYandex();       
        lib.GetDataOfCity("London");
        lib.GetDataOfCity("Paris");
        lib.CompareServices(); 
    });

});