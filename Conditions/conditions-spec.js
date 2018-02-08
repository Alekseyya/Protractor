const lib = require('./lib');
describe("Action tests", function(){
    browser.ignoreSynchronization = true; 
    it("Action click", function(){
        lib.GoToUrl("https://www.yandex.ru/");
        lib.Click();
    });
    it("Action scroll", function(){
        lib.GoToUrl("https://learn.javascript.ru/");
        lib.Scroll();
    });
    it("Action enter value", function(){
        lib.GoToUrl("https://www.yandex.ru/");
        lib.EnterValue();
    });
    it("Expected conditions", function(){
        lib.GoToUrl("http://www.yandex.ru/");
        lib.EnterTextInSearch("Hello");
    });
});