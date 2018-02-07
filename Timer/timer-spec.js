const lib = require('./lib');
describe("Pull tests", function(){
    browser.ignoreSynchronization = true; 
    it("Test", function(){
        browser.get("https://www.yandex.ru/");
        lib.GetVideo();

    });
});