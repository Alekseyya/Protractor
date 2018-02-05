const lib = require('./lib');

describe("CompareServicesYandex", function () {
    browser.ignoreSynchronization = true;    
    it("CompareServicesForLondonAndParis", function(){
        lib.GoToPage("https://www.yandex.ru/");       
        lib.SetCity("London");
        let londonResult = lib.GetInfoForLondon();        
        lib.SetCity("Paris");
        let parisResult = lib.GetInfoForParis(); 
        expect(londonResult).toEqual(parisResult);
    });
});